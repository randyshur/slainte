import React, { Component } from 'react';
import Shelf from './Shelf';
import HomeDisplay from './HomeDisplay';

class Home extends Component {
    render() {
        return (
            <div>
                <Shelf />
                <HomeDisplay />
            </div>
        );
    }
}

export default Home;