import React, {Component} from 'react';
import logo from '../pictures/sofa-cartoon.png'

class Home extends Component {
    render() {
        return (
            <div>
                <h2>Welcome to the homepage!</h2>
                <img src={logo} className="App-logo" alt="logo"/>
            </div>
        );
    }
}

export default Home;