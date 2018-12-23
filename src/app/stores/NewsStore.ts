import { observable, computed, action, runInAction } from 'mobx';
import { INewsItem } from 'app/models/NewsModel';
import newsapi from 'app/services/newsapi';
import RootStore from './RootStore';

export default class NewsStore {
  rootStore: RootStore;
  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
  }
  @observable news: Array<INewsItem> = [];
  @observable status: string = 'idle';
  @observable currentArticle = null;
  @observable isFetched: boolean = false;
  newsPerPage: number = 20;
  @computed get isEmptyResult() {
    return this.isFetched && this.news.length === 0;
  }
  @computed get isLoading() {
    return this.status === 'loading';
  }
  @computed get header() {
    const { isFetched, isLoading } = this;
    const {
      currentCountry: cntr,
      currentCategory: cat
    } = this.rootStore.filterStore;

    const countryText = !cntr ? '"All contries"' : `"${cntr}"`;

    const catText = !cat ? '"All categories"' : `"${cat} category"`;

    const headerContent = isFetched
      ? `News from ${countryText} and ${catText}`
      : 'Select Country, Category';

    const loadingHeader = 'Loading ...';
    return isLoading ? loadingHeader : headerContent;
  }
  @action setCurrentArticle(article) {
    this.currentArticle = article;
  }
  @action getNews(country, category) {
    this.news = [];
    this.status = 'loading';
    newsapi
      .getEverything(country, category)
      .then(this.getNewsSuccess, this.getNewsFailure);
  }
  @action.bound getNewsSuccess({ articles }) {
    if (articles instanceof Array) {
      this.status = 'idle';
      this.news = articles.slice(0, this.newsPerPage);
      this.isFetched = true;
      this.rootStore.filterStore.currentCategory = this.rootStore.filterStore.categoryFilter;
      this.rootStore.filterStore.currentCountry = this.rootStore.filterStore.countryFilter;
    }
  }
  @action.bound getNewsFailure(error) {
    this.status = 'error';
    console.log(error);
  }
  @action setFilter(name: string, value: string) {
    this[`${name}Filter`] = value;
  }
  @action getNewsUsingFilter() {
    const { countryFilter, categoryFilter } = this.rootStore.filterStore;
    this.getNews(countryFilter, categoryFilter);
  }
}
