import * as React from 'react';
import * as style from './style.css';
import { inject, observer } from 'mobx-react';
import Select, { ISelectOption } from 'app/components/Select';
import { COUNTRIES, CATEGORIES, LANGUAGES } from 'app/constants/newsapi';
import { STORE_NEWS } from 'app/constants/stores';

const createListFromObject = (ctrs: Object): ISelectOption[] =>
  Object.keys(ctrs).map((country: string) => ({
    label: country,
    value: ctrs[country]
  }));

const createListFromArray = (cats: String[]): ISelectOption[] =>
  cats.map((cat: string): ISelectOption => ({ label: cat, value: cat }));

const countriesList: ISelectOption[] = createListFromObject(COUNTRIES);
const languagesList: ISelectOption[] = createListFromObject(LANGUAGES);
const categoriesList: ISelectOption[] = createListFromArray(CATEGORIES);

@inject(STORE_NEWS)
@observer
export default class Filter extends React.Component {
  handleValue(filterName: string) {
    const newsStore = this.props[STORE_NEWS];
    return (value) => {
      newsStore.setFilter(filterName, value);
    };
  }
  getList() {
    const newsStore = this.props[STORE_NEWS];
    newsStore.getNewsUsingFilter();
  }

  render() {
    return (
      <div className={style.filter}>
        <div className="row">
          <div className="col">
            <Select
              label="Choose a country:"
              defaultSelectedLabel="all"
              defaultSelectedValue="all"
              onChange={this.handleValue('country')}
              options={countriesList}
            />
          </div>
          <div className="col">
            <Select
              label="Choose a category:"
              defaultSelectedLabel="all"
              defaultSelectedValue="all"
              onChange={this.handleValue('category')}
              options={categoriesList}
            />
          </div>
          <div className="col">
            <Select
              label="Choose a language:"
              defaultSelectedLabel="en"
              defaultSelectedValue="en"
              onChange={this.handleValue('language')}
              options={languagesList}
            />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className={style.getList}>
              <button
                onClick={this.getList.bind(this)}
                className="btn btn-primary"
              >
                Get List
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
