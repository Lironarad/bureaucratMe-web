import React, { Component } from 'react';
import './App.css';
import Home from './componets/pages/Home';
import About from './componets/pages/About';
import NotFound from './componets/pages/NotFound';
import Navbar from './componets/layout/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class App extends Component {
  state = {
    institutions: []
  };

  render() {
    return (
      <Router>
        <div className='App'>
          <Navbar />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/About' component={About} />
            <Route component={NotFound} />
          </Switch>
          <div className='container'></div>
        </div>
      </Router>
    );
  }
}

export default App;
