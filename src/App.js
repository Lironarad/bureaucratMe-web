import React, { Component } from 'react';
import './App.css';
import Navbar from './componets/layout/Navbar';
import Institutions from './componets/institutions/Institutions';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Navbar />
        <Institutions />
      </div>
    );
  }
}

export default App;
