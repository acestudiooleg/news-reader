import { observable, computed, action, when } from 'mobx';
import RouterStore from './RouterStore';
import NewsStore from './NewsStore';
import FilterStore from './FilterStore';

export default class RootStore {
  newsStore: NewsStore;
  filterStore: FilterStore;
  routerStore: RouterStore;
  constructor(router: RouterStore) {
    this.routerStore = router;
    this.newsStore = new NewsStore(this);
    this.filterStore = new FilterStore(this);

    const currectArticleIsNullForArticlePage = () =>
      router.location.pathname === '/article' && !this.newsStore.currentArticle;

    const redirectToRoot = () => router.push('/');
    when(currectArticleIsNullForArticlePage, redirectToRoot);
  }
}
