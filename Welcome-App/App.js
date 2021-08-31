import React, { Component } from 'react';


class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            displayName: '',
            name: ''
        }
    }

    handleChange = e => {
        this.setState({
            name: e.target.value
        })
    }

    handleClick = e => {
        this.setState({
            displayName: this.state.name
        });
    }

    render() {
        return (
            <>
            <h1>Welcome to the App!!</h1>
            <p>Hi there, {this.state.displayName}</p>
            <input value={this.state.name} onChange={this.handleChange} />
            <button onClick={this.handleClick}>Update name</button>
            </>
        );
    }
}

export default App;