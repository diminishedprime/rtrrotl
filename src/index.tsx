// tslint:disable-next-line:no-import-side-effect
import 'tslib';
import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import Home from './components/home';
import store from './redux/store';

// tslint:disable-next-line:no-import-side-effect
import './reset.css';

const Root = () => (
  <Provider store={store}>
    <Home />
  </Provider>
);

render(<Root />, document.getElementById('root'));
