import React, { Component } from 'react';
import './App.css';
import Sitebar from './components/Navbar';
import MainContent from './components/MainContent';

class App extends Component {
  render() {
    return (
      <div>
        <Sitebar />
        <MainContent />
      </div>
    );
  }
}

export default App;
