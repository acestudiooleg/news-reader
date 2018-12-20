import { observable, computed, action, runInAction } from 'mobx';
import { INewsItem } from 'app/models/NewsModel';
import newsapi from 'app/services/newsapi';
export default class NewsStore {
  @observable public news: Array<INewsItem> = [];
  @observable public status: string = 'idle';
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
        }
      });
      console.log(this.news);
    } catch (error) {
      runInAction(() => {
        this.status = 'error';
      });
      console.log(error);
    }
  };
}
