import React, { Component } from 'react';
import Shelf from '../Shelf';
import SpiritDisplay from './SpiritDisplay';

class Spirit extends Component {
  render() {
    return (
      <div>
        <Shelf />
        <SpiritDisplay />
      </div>
    );
  }
}

export default Spirit;