import * as React from 'react';
import NewsItem, { INewsItem } from 'app/components/NewsItem';

export default ({ news }: { news: INewsItem[] }) => (
  <div>{news.map(NewsItem)}</div>
);
