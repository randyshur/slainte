import React, { Component } from 'react';
import Sitebar from '../Sitebar';
import SpiritDisplay from './SpiritDisplay';

class Spirit extends Component {
  render() {
    return (
      <div>
        <Sitebar clickLogout={this.props.clickLogout} sessionToken={this.props.sessionToken} setToken={this.props.setToken} slainteModal={this.props.slainteModal} task={this.props.task} />
        <h1>Future Proprietor Spirit Entry</h1>
        <SpiritDisplay />
      </div>
    );
  }
}

export default Spirit;