import { observable, computed, action } from 'mobx';
import { INewsItem } from 'app/models/NewsModel';
import newsapi from 'app/services/newsapi';

export default class NewsStore {
  @observable public news: Array<INewsItem>;
  @action getNews = async (country, category, language) => {
    try {
      const response = await newsapi.getNews(country, category, language);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
}
