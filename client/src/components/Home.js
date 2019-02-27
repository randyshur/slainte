import React, { Component } from 'react';
import Sitebar from './Sitebar';
import Shelf from './Shelf';
import HomeDisplay from './HomeDisplay';

class Home extends Component {

    render() {
        return (
            <div>
                <Sitebar slainteModal={this.props.slainteModal} task={this.props.task} setToken={this.props.setToken} />
                <Shelf />
                <HomeDisplay />
            </div>
        );
    }
}

export default Home;