import RouterStore from './RouterStore';
import NewsStore from './NewsStore';
import { STORE_ROUTER, STORE_NEWS } from 'app/constants/stores';

export default function createStores(history) {
  const routerStore = new RouterStore(history);
  const newsStore = new NewsStore();
  return {
    [STORE_ROUTER]: routerStore,
    [STORE_NEWS]: newsStore
  };
}
