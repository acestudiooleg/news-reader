import * as React from 'react';
import * as style from './style.css';
import { INewsItem } from 'app/models/NewsModel';

export default (
  { title, description, urlToImage }: INewsItem,
  index: Number
) => (
  <div className={style.newsItem} key={title + index}>
    <div className={style.thumbnail}>
      <img src={urlToImage} alt="" />
    </div>
    <div className={style.content}>
      <h2>{title}</h2>
      <p>{description}</p>
      <a href="/" className={style.readMore}>
        Read More...
      </a>
    </div>
  </div>
);
