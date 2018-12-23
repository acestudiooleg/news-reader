import * as React from 'react';
import { inject, observer } from 'mobx-react';
import cx from 'classnames';
import { STORE_ROUTER } from 'app/constants/stores';

interface ILinkProps {
  url: string;
  state: {};
  classnames?: {};
}

@inject(STORE_ROUTER)
@observer
export default class Link extends React.Component<ILinkProps> {
  goTo(evt) {
    evt.preventDefault();
    const { push } = this.props[STORE_ROUTER];
    const { url, state } = this.props;
    push(url, state);
  }
  render() {
    const { url, classnames, children } = this.props;
    return (
      <a className={cx(classnames)} onClick={this.goTo.bind(this)} href={url}>
        {children}
      </a>
    );
  }
}
