import { observable, computed, action, runInAction } from 'mobx';
import { INewsItem } from 'app/models/NewsModel';
import newsapi from 'app/services/newsapi';
export default class NewsStore {
  @observable news: Array<INewsItem> = [];
  @observable status: string = 'idle';
  @observable countryFilter = null;
  @observable categoryFilter = null;
  @observable languageFilter: string = 'en';
  @observable isFetched: boolean = false;
  @computed get isLoading() {
    return this.status === 'loading';
  }
  @action getNews = async (country, category, language) => {
    try {
      this.news = [];
      this.status = 'loading';
      const response = await newsapi.getEverything(country, category, language);
      runInAction(() => {
        if (response.articles instanceof Array) {
          this.status = 'idle';
          this.news = response.articles;
          this.isFetched = true;
        }
      });
      console.log('news', this.news);
    } catch (error) {
      runInAction(() => {
        this.status = 'error';
      });
      console.log(error);
    }
  };
  @action setFilter(name: string, value: string) {
    this[`${name}Filter`] = value;
  }
  @action getNewsUsingFilter() {
    const { countryFilter, categoryFilter, languageFilter } = this;
    this.getNews(countryFilter, categoryFilter, languageFilter);
  }
}
