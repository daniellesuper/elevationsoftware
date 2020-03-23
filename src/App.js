import React, { Component } from 'react';
import { BrowserRouter as Router} from "react-router-dom";
import './styles/App.scss';
import history from './services/history';
import Routes from './routes';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="theme-1">
          <Router history={history} >
            <Routes/>
          </Router>
        </div>
      </div>
  );
  }
}
export default App;

