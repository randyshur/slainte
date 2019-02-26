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

const bgred= {
  backgroundColor: 'red'
}

class App extends Component {

  constructor(){
    super();
    this.state = {
      sessionToken: '',
      bob: false,
    }
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <div style={bgred}>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/distillery">
                <Distillery />
              </Route>
              <Route exact path="/spirit">
                <Spirit />
              </Route>
            </Switch>
            <Route exact path="/signin" render={()=><Home slainteModal={'User'} task={'signin'} />}/>
            <Route exact path="/signup" render={()=><Home slainteModal={'User'} task={'signup'} />}/>
            <Route exact path="/updateinfo" render={()=><Home slainteModal={'User'} task={'updateinfo'} />}/>
            <Route exact path="/bottlers" render={()=><Home slainteModal={'Lookup'} task={'bottlers'} />}/>
            <Route exact path="/finishes" render={()=><Home slainteModal={'Lookup'} task={'finishes'} />}/>
            <Route exact path="/grains" render={()=><Home slainteModal={'Lookup'} task={'grains'} />}/>
            <Route exact path="/notes" render={()=><Home slainteModal={'Lookup'} task={'notes'} />}/>
            <Route exact path="/owners" render={()=><Home slainteModal={'Lookup'} task={'owners'} />}/>
            <Route exact path="/ratings" render={()=><Home slainteModal={'Lookup'} task={'ratings'} />}/>
            <Route exact path="/regions" render={()=><Home slainteModal={'Lookup'} task={'regions'} />}/>
            <Route exact path="/types" render={()=><Home slainteModal={'Lookup'} task={'types'} />}/>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}


export default App;
