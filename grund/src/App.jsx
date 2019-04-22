import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import WOW from 'wowjs';

import Sidebar from './components/Sidebar';
import Greeting from './components/Greeting';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contacts from './components/Contacts';

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
            <Route path="/projects" component={Projects}/>
            <Route path="/contacts" component={Contacts}/>
          </Switch>
      </main>   
    );
  }
}

export default App;
