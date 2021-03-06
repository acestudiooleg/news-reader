import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { useStrict } from 'mobx';
import { Provider } from 'mobx-react';
import { createBrowserHistory } from 'history';
import createStores from 'app/stores/createStore';
import { App } from 'app';

// enable MobX strict mode
useStrict(true);

// default fixtures for TodoStore

// prepare MobX stores
const history = createBrowserHistory();
const rootStore = createStores(history);
window['stores'] = rootStore;

// render react DOM
ReactDOM.render(
  <Provider {...rootStore}>
    <App history={history} />
  </Provider>,
  document.getElementById('root')
);
