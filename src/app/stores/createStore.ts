import RouterStore from './RouterStore';
import RootStore from './RootStore';
import NewsStore from './NewsStore';
import FilterStore from './NewsStore';
import {
  STORE_ROUTER,
  STORE_ROOT,
  STORE_FILTER,
  STORE_NEWS
} from 'app/constants/stores';

export default function createStores(history) {
  const routerStore = new RouterStore(history);
  const rootStore = new RootStore(routerStore);
  return {
    [STORE_ROUTER]: routerStore,
    [STORE_ROOT]: rootStore,
    [STORE_FILTER]: rootStore.filterStore,
    [STORE_NEWS]: rootStore.newsStore
  };
}
