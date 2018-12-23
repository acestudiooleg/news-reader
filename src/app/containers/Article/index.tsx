import * as React from 'react';
import * as style from './style.css';

import { inject, observer } from 'mobx-react';
import { STORE_NEWS, STORE_ROUTER } from 'app/constants/stores';
import NewsStore from 'app/stores/NewsStore';
import { RouterStore } from 'mobx-react-router';
import newsapi from 'app/services/newsapi';

@inject(STORE_NEWS, STORE_ROUTER)
@observer
export class Article extends React.Component {
  goTo(path) {
    const router = this.props[STORE_ROUTER] as RouterStore;
    return () => router.push(path);
  }
  render() {
    const { currentArticle: ca, header } = this.props[STORE_NEWS] as NewsStore;
    const published = newsapi.createDate(new Date(ca.publishedAt));
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <nav className={style.breadcrumb} aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a onClick={this.goTo('/')} href="#">
                    {header}
                  </a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  {ca.title}
                </li>
              </ol>
            </nav>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <h1 className="text-center">{ca.title}</h1>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className={style.content}>
              <div className={style.picture}>
                <img src={ca.urlToImage} alt={ca.title} />
              </div>
              <p className={style.article}>{ca.content}</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <blockquote className="blockquote text-right">
              <p className="mb-0">{published}</p>
              <footer className="blockquote-footer">
                <a target="_blank" href={ca.url}>
                  {ca.source.name}
                </a>
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
    );
  }
}
