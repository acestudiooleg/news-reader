import * as React from 'react';
import Filter from 'app/components/Filter';
import NewsList from 'app/components/NewsList';

import { inject, observer } from 'mobx-react';
import { STORE_NEWS } from 'app/constants/stores';

const createHeader = (country, cat, isFetched, isLoading) => {
  const countryText = !country ? '"All contries"' : `"${country}"`;

  const catText = !cat ? '"All categories"' : `"${cat} category"`;

  const headerContent = isFetched
    ? `News from ${countryText} and ${catText}`
    : 'Select Country, Category';

  const loadingHeader = 'Loading ...';
  return isLoading ? loadingHeader : headerContent;
};

const alertBox = (
  <div className="alert alert-warning">
    Nothing found, Please change filter and try adain
  </div>
);
const errorBox = (
  <div className="alert alert-danger">Oops, something went wrong!</div>
);

@inject(STORE_NEWS)
@observer
export class NewsReader extends React.Component {
  render() {
    const {
      isLoading,
      news,
      currentCountry,
      currentCategory,
      isEmptyResult,
      isFetched,
      status
    } = this.props[STORE_NEWS];

    const header = createHeader(
      currentCountry,
      currentCategory,
      isFetched,
      isLoading
    );

    const normalBox = isEmptyResult ? alertBox : <NewsList news={news} />;
    const content = status === 'error' ? errorBox : normalBox;

    return (
      <div className="container">
        <Filter />
        <div className="row">
          <div className="col">
            <h1>{header}</h1>
          </div>
        </div>
        <div className="row">
          <div className="col">{content}</div>
        </div>
      </div>
    );
  }
}
