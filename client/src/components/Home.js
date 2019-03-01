import React, { Component } from 'react';
import Sitebar from './Sitebar';
import Shelf from './Shelf';
import HomeDisplay from './HomeDisplay';

class Home extends Component {

    render() {
        return (
            <div>
                <Sitebar clickLogout={this.props.clickLogout} sessionToken={this.props.sessionToken} setToken={this.props.setToken} slainteModal={this.props.slainteModal} task={this.props.task} />
                <Shelf />
                <HomeDisplay />
            </div>
        );
    }
}

export default Home;