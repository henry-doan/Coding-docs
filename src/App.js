import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Navbar from './components/Shared/Navbar';

import HTMLIntro from './components/html/HTMLInfo';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="main">
          <Switch>
            <Route exact path='/html-intro' component={HTMLIntro} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
