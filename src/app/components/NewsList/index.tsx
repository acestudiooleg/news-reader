import * as React from 'react';
import NewsItem from 'app/components/NewsItem';
import { INewsItem } from 'app/models/NewsModel';

export default ({
  news,
  setArticle
}: {
  news: INewsItem[];
  setArticle: () => void;
}) => (
  <div>
    {news.map((newsItem, index) => (
      <NewsItem
        newsItem={newsItem}
        setArticle={setArticle}
        key={newsItem.source.id + index}
      />
    ))}
  </div>
);
