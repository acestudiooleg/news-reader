import * as React from 'react';
import * as style from './style.css';
import { INewsItem } from 'app/models/NewsModel';
import Link from 'app/components/Link';

export default (ni: INewsItem, index) => (
  <div className={style.newsItem} key={ni.title + index}>
    <div className={style.thumbnail}>
      <img src={ni.urlToImage} alt="" />
    </div>
    <div className={style.content}>
      <h2>{ni.title}</h2>
      <p>{ni.description}</p>
      <Link url="/article" state={ni}>
        Read More...
      </Link>
    </div>
  </div>
);
