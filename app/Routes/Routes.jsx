import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import App from '../layouts/App';
import Privacy from '../views/Privacy';
import Home from '../views/Home';
import About from '../views/About';
import Services from '../views/Services';
import Employees from '../views/Employees';
import Enterprises from '../views/Enterprises';
import Contact from '../views/Contact';

import NotFound from '../views/NotFound';

const Routes = () => (
  <Router history={browserHistory} onUpdate={() => window.scrollTo(0, 0)}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="nosotros" component={About}/>
      <Route path="servicios" component={Services}/>
      <Route path="empleados" component={Employees}/>
      <Route path="empresas" component={Enterprises}/>
      <Route path="contacto" component={Contact}/>
      <Route path="privacidad" component={Privacy}/>
      <Route path="*" component={NotFound}/>
    </Route>
  </Router>
);

export default Routes;
