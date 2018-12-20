import * as React from 'react';
import Filter from 'app/components/Filter';
import NewsList from 'app/components/NewsList';

import { inject, observer } from 'mobx-react';
// import { RouteComponentProps } from 'react-router';
// import { RouterStore } from 'app/stores';
import { STORE_ROUTER, STORE_NEWS } from 'app/constants/stores';

@inject(STORE_ROUTER, STORE_NEWS)
@observer
export class NewsReader extends React.Component {
  render() {
    const {
      isLoading,
      news,
      countryFilter,
      categoryFilter,
      languageFilter
    } = this.props[STORE_NEWS];
    const countryText =
      countryFilter === null ? '"All contries"' : `"${countryFilter}"`;
    const categoryText =
      categoryFilter === null
        ? '"All categories"'
        : `"${categoryFilter} category"`;
    const langText = `"${languageFilter} language"`;
    const headerContent =
      news.length > 0 ? (
        <h1>
          News from {countryText} and {categoryText} and {langText}
        </h1>
      ) : (
        <h1>Select Country, Category, Language</h1>
      );
    const loadingHeader = <h1>Loading ...</h1>;
    const header = isLoading ? loadingHeader : headerContent;
    return (
      <div className="container">
        <Filter />
        <div className="row">
          <div className="col">{header}</div>
        </div>
        <div className="row">
          <div className="col">
            <NewsList news={news} />
          </div>
        </div>
      </div>
    );
  }
}
