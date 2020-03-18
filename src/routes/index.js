import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route.jsx';

import About from '../pages/About';
import Contact from '../pages/Contact';
import Showcase from '../components/Showcase/Showcase.jsx';


function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Showcase} />
      <Route path="/pages/About" exact component={About} />
      <Route path="/pages/Contact" exact component={Contact} />
    </Switch>
  );
}
export default Routes;