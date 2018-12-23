import * as React from 'react';
import NewsItem from 'app/components/NewsItem';
import { INewsItem } from 'app/models/NewsModel';

export default ({ news }: { news: INewsItem[] }) => (
  <div>
    {news.map((newsItem) => (
      <NewsItem {...newsItem} />
    ))}
  </div>
);
