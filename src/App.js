import React, { Component } from 'react';
import './App.css';
import Car from './Car/Car';

class App extends Component {
    render() {
        const divST = {
            'text-align': 'center'
        }
        return (
            <div style={divST}>
                <h1>Hello world</h1>
                <Car />
            </div>
        );
    }
}

export default App;
