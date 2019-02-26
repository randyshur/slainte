import React, { Component } from 'react';
import Sitebar from '../Sitebar';
import Shelf from '../Shelf';
import SpiritDisplay from './SpiritDisplay';

class Spirit extends Component {
  render() {
    return (
      <div>
        <Sitebar slainteModal={this.props.slainteModal}/>
        <Shelf />
        <SpiritDisplay />
      </div>
    );
  }
}

export default Spirit;