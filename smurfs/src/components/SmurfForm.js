import React, { Component } from 'react';
import axios from 'axios';

class SmurfForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            age: '',
            height: ''
        };
    }
    
    addSmurf = event => {
        event.preventDefault();
        let newSmurf = {
            age: this.state.age,
            height: this.state.height,
            id: this.state.id,
            name: this.state.name,
        };

        axios
            .post('http://localhost:3333/smurfs', newSmurf)
            this.setState({
                name: '',
                age: '',
                height: ''
            });
    }

    handleInputChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    render() {
        return (
            <div className="SmurfForm">
                <form onSubmit={this.addSmurf}>
                    <input 
                        onChange={this.handleInputChange}
                        placeholder='name'
                        value={this.state.name}
                        name='name'
                    />
                    <input
                        onChange={this.handleInputChange}
                        placeholder="height"
                        value={this.state.height}
                        name="height"
                        />
                    <button type ='submit'>Enter your favorite smurf!</button>
                </form>
            </div>
        );
    }
}


export default SmurfForm;