import React, { Component, Fragment } from 'react';
import './App.css';
import Navbar from './componets/layout/Navbar';
import Institutions from './componets/institutions/Institutions';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './componets/pages/About';
class App extends Component {
  state = {
    institutions: [],
    loading: false
  };

  //TODO: add Institutions API (go back to section 3.14)
  async componentDidMount() {
    this.setState({ loading: true });
    const res = await axios.get('Institutions API');
    this.setState({ institutions: res.data, loading: false });
  }

  render() {
    return (
      <Router>
        <div className='App'>
          <Navbar />
          <Switch>
            <Route
              exact
              path='/'
              render={props => (
                <Fragment>
                  <Institutions
                    loading={this.state.loading}
                    institutions={this.state.institutions}
                  />
                </Fragment>
              )}
            />
            <Route exact path='/About' component={About} />
          </Switch>
          <div className='container'></div>
        </div>
      </Router>
    );
  }
}

export default App;
