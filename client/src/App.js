import React, { Component } from 'react';
import './App.css';
import Sitebar from './components/Sitebar';
import Home from './components/Home';
import Distillery from './components/Distilleries/Distillery';
import Spirit from './components/Spirits/Spirit';
import UserModal from './components/Lookups/LookupIndex';
import LookupModal from './components/Lookups/LookupIndex';

import {
  BrowserRouter,
  Route
} from 'react-router-dom'; 

class App extends Component {
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
          <Route exact path="/" component={Home} />
          <Route exact path="/distillery" component={Distillery} />
          <Route exact path="/spirit" component={Spirit} />
				</div>

			</div>
		);
	}
}

export default App;
