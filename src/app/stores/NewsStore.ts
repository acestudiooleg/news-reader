import { observable, computed, action, runInAction } from 'mobx';
import { INewsItem } from 'app/models/NewsModel';
import newsapi from 'app/services/newsapi';

export default class NewsStore {
  @observable news: Array<INewsItem> = [];
  @observable status: string = 'idle';
  @observable countryFilter = null;
  @observable categoryFilter = null;
  @observable currentCountry = null;
  @observable currentCategory = null;
  @observable isFetched: boolean = false;
  newsPerPage: number = 20;
  @computed get isEmptyResult() {
    return this.isFetched && this.news.length === 0;
  }
  @computed get isLoading() {
    return this.status === 'loading';
  }
  @action getNews = async (country, category) => {
    try {
      this.news = [];
      this.status = 'loading';
      const { articles } = await newsapi.getEverything(country, category);
      runInAction(() => {
        if (articles instanceof Array) {
          this.status = 'idle';
          this.news = articles.slice(0, this.newsPerPage);
          this.isFetched = true;
          this.currentCategory = this.categoryFilter;
          this.currentCountry = this.countryFilter;
        }
      });
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
    const { countryFilter, categoryFilter } = this;
    this.getNews(countryFilter, categoryFilter);
  }
}
