import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import WOW from 'wowjs';

import Sidebar from './components/Sidebar';
import Greeting from './components/Greeting';
import About from './components/About';
import Skills from './components/Skills';

class App extends Component {
  componentDidMount() {
    new WOW.WOW().init();
  }

  render() {
    return (
      <main>
        <Sidebar/>
          <Switch>
            <Route exact path="/sokolov" component={Greeting}/>
            <Route path="/about" component={About}/>
            <Route path="/skills"  component={Skills}/>
            <Route path="/projects"/>
            <Route path="/contacts"/>
          </Switch>
      </main>   
    );
  }
}

export default App;
