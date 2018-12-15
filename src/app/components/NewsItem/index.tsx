import * as React from 'react';
import * as style from './style.css';

export interface INewsItem {
  source: {
    id: string;
    name: string;
  };
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: any;
}

export default (
  {
    source: { id, name },
    author,
    title,
    description,
    url,
    urlToImage,
    publishedAt,
    content
  }: INewsItem,
  index: Number
) => (
  <div className={style.newsItem} key={name + index}>
    <div className={style.thumbnail}>
      <img src={urlToImage} alt="" />
    </div>
    <div className={style.content}>
      <h2>{name}</h2>
      <p>{description}</p>
      <a href="/" className={style.readMore}>
        Read More...
      </a>
    </div>
  </div>
);
