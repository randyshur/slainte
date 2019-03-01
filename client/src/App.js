import React, { Component } from 'react';
import './App.css';

import Home from './components/Home';
import Distillery from './components/Distilleries/Distillery';
import Spirit from './components/Spirits/Spirit';
import DistilleryProp from './components/Distilleries/DistilleryProp';
import SpiritProp from './components/Spirits/SpiritProp';

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
      proprietor: '',
    }
  }

  componentWillMount() {
    const token = localStorage.getItem('token');
    if (token && !this.state.sessionToken) {
      this.setState({ sessionToken: token });
    }
  }

  setSessionState = (token) => {
    localStorage.setItem('token', token);
    this.setState({ sessionToken: token });
  }

  logout = () => {
    this.setState({
      sessionToken: ''
    })
    localStorage.clear();
  }

  memberViews = () => {
    //console.log('APPlocal--->' + localStorage.getItem('token'))
    // console.log('APPstate--->' + this.state.sessionToken)
    //console.log((this.state.sessionToken === localStorage.getItem('token')))
    if (this.state.sessionToken === localStorage.getItem('token')) {
      return (

        <React.Fragment>
          <Route exact path="/Home" render={() => <Home clickLogout={this.logout} sessionToken={this.state.sessionToken} />} />
          <Route exact path="/distillery" render={() => <Distillery clickLogout={this.logout} sessionToken={this.state.sessionToken} />} />
          <Route exact path="/spirit" render={() => <Spirit clickLogout={this.logout} sessionToken={this.state.sessionToken} />} />
          <Route exact path="/distilleryprop" render={() => <DistilleryProp clickLogout={this.logout} sessionToken={this.state.sessionToken} />} />
          <Route exact path="/spiritprop" render={() => <SpiritProp clickLogout={this.logout} sessionToken={this.state.sessionToken} />} />
          <Route exact path="/bottlers" render={() => <Home clickLogout={this.logout} sessionToken={this.state.sessionToken} slainteModal={'Lookup'} task={'bottlers'} />} />
        </React.Fragment>

      )
    }
      /*
    } else {
      return (

        <React.Fragment>
          <Route exact path="/" render={() => <Home clickLogout={this.logout} sessionToken={this.state.sessionToken} />} />
          <Route exact path="/signin" render={() => <Home clickLogout={this.logout} sessionToken={this.state.sessionToken} slainteModal={'User'} task={'signin'} setToken={this.setSessionState} />} />
          <Route exact path="/signup" render={() => <Home clickLogout={this.logout} sessionToken={this.state.sessionToken} slainteModal={'User'} task={'signup'} setToken={this.setSessionState} />} />
        </React.Fragment>
      )
    }
    */
  }

  proprietorViews = () => {
    if (true) {
      return (

        <React.Fragment>
          <Route exact path="/distilleryprop" render={() => <DistilleryProp clickLogout={this.logout} sessionToken={this.state.sessionToken} />} />
          <Route exact path="/spiritprop" render={() => <SpiritProp clickLogout={this.logout} sessionToken={this.state.sessionToken} />} />
          <Route exact path="/bottlers" render={() => <Home clickLogout={this.logout} sessionToken={this.state.sessionToken} slainteModal={'Lookup'} task={'bottlers'} />} />
        </React.Fragment>

      )
    }
  }

  render() {
    //console.log('localstorage--->' + localStorage.getItem('token'))
    //console.log('state--->' + this.state.sessionToken)
    return (
      <BrowserRouter>
        <div>
            <Switch>
              <Route exact path="/" render={() => <Home clickLogout={this.logout} sessionToken={this.state.sessionToken} />} />
              <Route exact path="/signin" render={() => <Home clickLogout={this.logout} sessionToken={this.state.sessionToken} slainteModal={'User'} task={'signin'} setToken={this.setSessionState} />} />
              <Route exact path="/signup" render={() => <Home clickLogout={this.logout} sessionToken={this.state.sessionToken} slainteModal={'User'} task={'signup'} setToken={this.setSessionState} />} />

              {this.memberViews()}
              {this.proprietorViews()}
            </Switch>
              </div>
      </BrowserRouter>
    );
  }
}


export default App;
