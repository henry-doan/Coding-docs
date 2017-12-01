import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Navbar from './components/Shared/Navbar';

import HTMLIntro from './components/html/HTMLInfo';
import JSIntro from './components/js/JSInfo';
import CSSIntro from './components/css/CSSInfo';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="main">
          <Switch>
            <Route exact path='/html-intro' component={HTMLIntro} />
            <Route exact path='/css-intro' component={CSSIntro} />
            <Route exact path='/js-intro' component={JSIntro} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
