import * as React from 'react';
import { hot } from 'react-hot-loader';
import { Router, Route, Switch } from 'react-router';
import { Root } from 'app/containers/Root';
import { NewsReader } from 'app/containers/NewsReader';
import { Article } from 'app/containers/Article';

// render react DOM
export const App = hot(module)(({ history }) => (
  <Root>
    <Router history={history}>
      <Switch>
        <Route path="/article" component={Article} />
        <Route path="/" component={NewsReader} />
      </Switch>
    </Router>
  </Root>
));
