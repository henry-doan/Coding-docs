import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Navbar from './components/Shared/Navbar';
import Overview from './components/overview/Overview';
import HTMLIntro from './components/html/HTMLInfo';
import JSIntro from './components/js/JSInfo';
import CSSIntro from './components/css/CSSInfo';
import CLIntro from './components/cl/CLInfo';
import RubyIntro from './components/ruby/RubyInfo';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="main">
          <Switch>
            <Route exact path='/' component={Overview} />
            <Route exact path='/overview' component={Overview} />
            <Route exact path='/html-intro' component={HTMLIntro} />
            <Route exact path='/css-intro' component={CSSIntro} />
            <Route exact path='/js-intro' component={JSIntro} />
            <Route exact path='/cl-intro' component={CLIntro} />
            <Route exact path='/ruby-intro' component={RubyIntro} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
