import React, { Component } from 'react';
import './App.css';
import Sitebar from './components/Sitebar';
import Home from './components/Home';
import User from './components/Users/User';
import Distillery from './components/Distilleries/Distillery';
import Spirit from './components/Spirits/Spirit';

import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';

class App extends Component {

  constructor() {
    super();
    this.state = {
      sessionToken: '',
      proprietor: ''
    }
  }

  componentWillMount(){
    const token = localStorage.getItem('token');
    if (token && !this.state.sessionToken){
      this.setState({sessionToken: token});
    }
  }

  setSessionState = (token) => {
    localStorage.setItem('token', token);
    this.setState({sessionToken: token});
  }

  logout = () => {
    this.setState({
      sessionToken: '',
      proprietor: ''
    })
    localStorage.clear();
  }

  memberViews = () => {
    if (this.state.sessionToken === localStorage.getItem('token')){
      return (
        <Switch>
          <Route exact path="/">
            <Home sessionToken={this.state.sessionToken} proprietor={this.state.proprietor}/>
          </Route>
          <Route exact path="/distillery">
            <Distillery sessionToken={this.state.sessionToken} proprietor={this.state.proprietor}/>
          </Route>
          <Route exact path="/spirit">
            <Spirit sessionToken={this.state.sessionToken} proprietor={this.state.proprietor}/>
          </Route>
        </Switch>
      )
    } else {
      return (
        <Route path="/user">
          <User setToken={this.setSessionState}/>
        </Route>
      )
    }
  }

  render() {
    return (
      <BrowserRouter>
        <Dashboard />
      </BrowserRouter>
    );
  }
}

class Dashboard extends React.Component {
  render() {

    return (
      <div id="dashboard">
        <Sitebar />
        <div className="content">
        <Home/>
        </div>

      </div>
    );
  }
}

export default App;