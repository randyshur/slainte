import React, { Component } from 'react';
import Sitebar from '../Sitebar';
import Shelf from '../Shelf';
import DistilleryDisplay from './DistilleryDisplay';

class Distillery extends Component {
  render() {
    return (
      <div>
        <Sitebar clickLogout={this.props.clickLogout} sessionToken={this.props.sessionToken} setToken={this.props.setToken} slainteModal={this.props.slainteModal} task={this.props.task} />
        <Shelf />
        <DistilleryDisplay />
      </div>
    );
  }
}

export default Distillery;