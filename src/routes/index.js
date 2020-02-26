import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Services from '../pages/Services';
import Toolbar from '../components/Toolbar/Toolbar.jsx';
import SideDrawer from '../components/SideDrawer/SideDrawer.jsx';
import Backdrop from '../components/Backdrop/Backdrop.jsx';
import Footer from '../components/Footer/Footer.jsx';
import Showcase from '../components/Showcase/Showcase.jsx';


function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Showcase} />
      <Route path="/pages/About" exact component={About} />
      <Route path="/pages/Contact" exact component={Contact} />
      <Route path="/pages/Services" exact component={Services} />
      {/* redirect user to SignIn page if route does not exist and user is not authenticated */}
      <Route component={Showcase} />
    </Switch>
  );
}
export default Routes;