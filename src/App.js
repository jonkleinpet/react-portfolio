import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import LandingRoute from './routes/LandingRoute/LandingRoute';
import Sidebar from './components/Sidebar/Sidebar';
import ProjectRoute from './routes/ProjectRoute/ProjectRoute';
import AboutRoute from './routes/AboutRoute/AboutRoute';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <Route path={ '/' } component={ Sidebar } />
          <div className="main">
            <Route exact path={ '/' } component={ LandingRoute } />
            <Route path={ '/about' } component={ AboutRoute } />
            <Route path={ '/projects' } component={ ProjectRoute } />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
