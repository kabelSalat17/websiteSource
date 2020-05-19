import React, { Component } from 'react'
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import MyProjects from './components/MyProjects/MyProjects';
import MyCv from './components/MyCv/MyCv';
import Blockchain from './components/SideProjects/Blockchain';


export class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route path="/" exact component={Home}/> 
            <Route path="/myprojects" exact component={MyProjects}/> 
            <Route path="/mycv" exact component={MyCv}/> 
            <Route path="/blockchain" exact component={Blockchain}/> 
          </Switch>
        </div>
      </Router >
    )
  }
}

export default App
