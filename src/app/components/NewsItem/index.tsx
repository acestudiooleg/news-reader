import * as React from 'react';
import * as style from './style.css';

const NewsItem = ({ newsItem, setArticle }) => (
  <div className={style.newsItem}>
    <div className={style.thumbnail}>
      <img src={newsItem.urlToImage} alt="" />
    </div>
    <div className={style.content}>
      <h2>{newsItem.title}</h2>
      <p>{newsItem.description}</p>
      <button className="btn btn-primary" onClick={setArticle(newsItem)}>
        Read More...
      </button>
    </div>
  </div>
);

export default NewsItem;
