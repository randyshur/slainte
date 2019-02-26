import React, { Component } from 'react';
import Shelf from '../Shelf';
import DistilleryDisplay from './DistilleryDisplay';

class Distillery extends Component {
  render() {
    return (
      <div>
        <Shelf />
        <DistilleryDisplay />
      </div>
    );
  }
}

export default Distillery;