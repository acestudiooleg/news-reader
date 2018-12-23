import * as React from 'react';

import NewsList from 'app/components/NewsList';

import { inject, observer } from 'mobx-react';
import { STORE_NEWS, STORE_FILTER, STORE_ROUTER } from 'app/constants/stores';
import { INewsItem } from 'app/models/NewsModel';
import NewsStore from 'app/stores/NewsStore';
import { RouterStore } from 'mobx-react-router';

const alertBox = (
  <div className="alert alert-warning">
    Nothing found, Please change filter and try adain
  </div>
);
const errorBox = (
  <div className="alert alert-danger">Oops, something went wrong!</div>
);

@inject(STORE_NEWS, STORE_FILTER, STORE_ROUTER)
@observer
export class NewsReader extends React.Component {
  setArticle(article: INewsItem): () => void {
    return () => {
      const news = this.props[STORE_NEWS] as NewsStore;
      const router = this.props[STORE_ROUTER] as RouterStore;
      news.setCurrentArticle(article);
      router.push('/article');
    };
  }
  render() {
    const { news, isEmptyResult, status, header } = this.props[STORE_NEWS];

    const normalBox = isEmptyResult ? (
      alertBox
    ) : (
      <NewsList news={news} setArticle={this.setArticle.bind(this)} />
    );
    const content = status === 'error' ? errorBox : normalBox;

    return (
      <div className="container">
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
