import { observable, action, when } from 'mobx';
import RootStore from './RootStore';

export default class FilterStore {
  constructor(public rootStore: RootStore) {}
  @observable countryFilter = null;
  @observable categoryFilter = null;
  @observable currentCountry = null;
  @observable currentCategory = null;
  @action setFilter(name: string, value: string) {
    this[`${name}Filter`] = value;
  }
}
