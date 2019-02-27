import React, { Component } from 'react';
import './App.css';

import Home from './components/Home';
import Distillery from './components/Distilleries/Distillery';
import Spirit from './components/Spirits/Spirit';

import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';

const bgred = {
  backgroundColor: 'red'
}

class App extends Component {

  constructor() {
    super();
    this.state = {
      sessionToken: '',
      proprietor: '',
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
      sessionToken: ''
    })
    localStorage.clear();
  }

  memberViews = () => {
    console.log('APPlocal--->' + localStorage.getItem('token'))
    console.log('APPstate--->' + this.state.sessionToken)
    console.log((this.state.sessionToken === localStorage.getItem('token')))
    if (this.state.sessionToken === localStorage.getItem('token')){
      return (

        <React.Fragment>
              <Route exact path="/updateinfo" render={() => <Home slainteModal={'User'} task={'updateinfo'} />} />
              <Route exact path="/distillery" component={Distillery} />
              <Route exact path="/spirit" component={Spirit} />
        </React.Fragment>

      )
    }
  }

  proprietorViews = () => {
    if (true){
      return (

        <Switch>
             <Route exact path="/bottlers" render={() => <Home slainteModal={'Lookup'} task={'bottlers'} />} />
              <Route exact path="/finishes" render={() => <Home slainteModal={'Lookup'} task={'finishes'} />} />
              <Route exact path="/grains" render={() => <Home slainteModal={'Lookup'} task={'grains'} />} />
              <Route exact path="/notes" render={() => <Home slainteModal={'Lookup'} task={'notes'} />} />
              <Route exact path="/owners" render={() => <Home slainteModal={'Lookup'} task={'owners'} />} />
              <Route exact path="/ratings" render={() => <Home slainteModal={'Lookup'} task={'ratings'} />} />
              <Route exact path="/regions" render={() => <Home slainteModal={'Lookup'} task={'regions'} />} />
              <Route exact path="/types" render={() => <Home slainteModal={'Lookup'} task={'types'} />} />
        </Switch>
      
      )
    }
  }

  render() {
    console.log('localstorage--->' + localStorage.getItem('token'))
    console.log('state--->' + this.state.sessionToken)
    return (
      <BrowserRouter>
        <div>
          <div style={bgred}>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/signin" render={() => <Home slainteModal={'User'} task={'signin'} setToken={this.setSessionState}/>} />
              <Route exact path="/signup" render={() => <Home slainteModal={'User'} task={'signup'} setToken={this.setSessionState}/>} />
            {this.memberViews()}
            {this.proprietorViews()}
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}


export default App;
