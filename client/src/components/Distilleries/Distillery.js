import React, { Component } from 'react';
import Sitebar from '../Sitebar';
import Shelf from '../Shelf';
import DistilleryDisplay from './DistilleryDisplay';

class Distillery extends Component {
  render() {
    return (
      <div>
        <Sitebar slainteModal={this.props.slainteModal}/>
        <Shelf />
        <DistilleryDisplay />
      </div>
    );
  }
}

export default Distillery;