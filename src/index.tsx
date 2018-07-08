// tslint:disable-next-line:no-import-side-effect
import 'tslib';
// tslint:disable-next-line:no-import-side-effect
import './reset.css';
import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router';
import { ConnectedRouter } from 'connected-react-router';
import Todos from './components/todos';
import TopBar from './components/top-bar';
import store, { history } from './redux/store';

const Root = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <React.Fragment>
        <Route path="/" component={TopBar} />
        <Switch>
          <Route exact={true} path="/" component={Todos} />
          <Route
            exact={true}
            path="/about"
            render={() => <div>An about page could go here</div>}
          />
        </Switch>
      </React.Fragment>
    </ConnectedRouter>
  </Provider>
);

render(<Root />, document.getElementById('root'));
