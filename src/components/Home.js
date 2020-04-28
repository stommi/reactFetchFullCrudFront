import React, {Component} from 'react';
import logo from '../pictures/donut.png'

class Home extends Component {
    render() {
        return (
            <div>
                <h2>This is homepage</h2>
                <img src={logo} className="App-logo" alt="logo"/>
            </div>
        );
    }
}

export default Home;