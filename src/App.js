import React, { Component } from 'react';
import { BrowserRouter as Router} from "react-router-dom";
import './styles/App.scss';
import history from './services/history';
import Routes from './routes';
import PropTypes from "prop-types";
import SideDrawer from './components/SideDrawer/SideDrawer.jsx';
import Backdrop from './components/Backdrop/Backdrop.jsx';

class App extends Component {
  state = {
    sideDrawerOpen: false
  };

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return {sideDrawerOpen: !prevState.sideDrawerOpen};
    });
  };
  backdropClickHandler = () => {
    this.setState({sideDrawerOpen: false});
  };

  render() {
    let backdrop;
    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler}/>
    }
    return (
      <div className="App">
        <div className="theme-1">
          <Router history={history}>
            <Routes />
          </Router>
        </div>
      </div>
  );
  }
}
export default App;

App.propTypes = {
  children: PropTypes.node.isRequired,
  sideDrawerOpen: PropTypes.bool.isRequired
};