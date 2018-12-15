import { RouterStore } from './RouterStore';
import { STORE_ROUTER } from 'app/constants/stores';

export function createStores(history) {
  const routerStore = new RouterStore(history);
  return {
    [STORE_ROUTER]: routerStore
  };
}
