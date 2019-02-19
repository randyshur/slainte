import React, { Component } from 'react';
import './App.css';
import Topbar from './components/Topbar';
import MainContent from './components/MainContent';

class App extends Component {
  render() {
    return (
      <div>
        <Topbar />
        <MainContent />
      </div>
    );
  }
}

export default App;
