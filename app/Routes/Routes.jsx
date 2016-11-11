import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import App from '../layouts/App';
import Home from '../views/Home';

import NotFound from '../views/NotFound';

const Routes = () => (
  <Router history={browserHistory} onUpdate={() => window.scrollTo(0, 0)}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="*" component={NotFound}/>
    </Route>
  </Router>
);

export default Routes;
