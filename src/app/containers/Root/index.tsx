import * as React from 'react';
import Filter from 'app/components/Filter';

export class Root extends React.Component<any, any> {
  renderDevTool() {
    if (process.env.NODE_ENV !== 'production') {
      const DevTools = require('mobx-react-devtools').default;
      return <DevTools />;
    }
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <a className="navbar-brand" href="/">
            News Reader
          </a>
        </nav>
        <div className="container fluid">
          <Filter />
          <div className="row">
            <div className="col">{this.props.children}</div>
          </div>
        </div>
        {this.renderDevTool()}
      </div>
    );
  }
}
