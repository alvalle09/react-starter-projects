import React, { Component } from 'react';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            displayName: '',
            name: ''
        }
    }

    render() {
        return (
            <>
            <h1>Welcome to the App!!</h1>
            <p>Hi there, {this.state.displayName}</p>
            <input value={this.state.name} onChange="this.handleChange" />
            
            </>
        );
    }
}

export default App;