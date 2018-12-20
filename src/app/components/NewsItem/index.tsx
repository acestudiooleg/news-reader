import * as React from 'react';
import * as style from './style.css';
import { INewsItem } from 'app/models/NewsModel';
import { STORE_ROUTER } from 'app/constants/stores';
import { inject, observer } from 'mobx-react';

@inject(STORE_ROUTER)
@observer
export default class NewsItem extends React.Component {
  title: string;
  description: string;
  urlToImage: string;
  index: number;
  constructor(props: INewsItem, index: number) {
    super(props, index);
    const { title, description, urlToImage } = props;
    this.title = title;
    this.description = description;
    this.urlToImage = urlToImage;
    this.index = index;
  }

  render() {
    const { title, description, urlToImage, index } = this;
    const router = this.props[STORE_ROUTER];
    return (
      <div className={style.newsItem} key={title + index}>
        <div className={style.thumbnail}>
          <img src={urlToImage} alt="" />
        </div>
        <div className={style.content}>
          <h2>{title}</h2>
          <p>{description}</p>
          <a onClick={router.push('/hello')} className={style.readMore}>
            Read More...
          </a>
        </div>
      </div>
    );
  }
}
