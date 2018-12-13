import * as React from 'react';
import * as style from './style.css';
import { inject, observer } from 'mobx-react';
// import { RouteComponentProps } from 'react-router';
// import { RouterStore } from 'app/stores';
import { STORE_ROUTER } from 'app/constants';

/**
 * #APIKEY

4c7896ad75144f0d82e76f7f360011b5
 */
@inject(STORE_ROUTER)
@observer
export class NewsReader extends React.Component {
  render() {
    const { children } = this.props;

    return (
      <div className={style.normal}>
        Hello World
        {children}
      </div>
    );
  }
}
