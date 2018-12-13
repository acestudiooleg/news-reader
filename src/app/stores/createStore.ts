// import { History } from 'history';
import { RouterStore } from './RouterStore';
import { STORE_ROUTER } from 'app/constants';

export function createStores(history, defaultTodos) {
  const routerStore = new RouterStore(history);
  return {
    [STORE_ROUTER]: routerStore
  };
}
