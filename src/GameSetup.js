import React, {Component} from 'react';
import PropTypes from 'prop-types';

class GameSetup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: ''
        };
        this.onSubmit = this.onSubmit.bind(this);
    }
    
    handleNameChange(event) {
        this.setState({name: event.target.value});
    }
    
    onSubmit() {
        this.props.onSubmit({name: this.state.name});
    }
    
    render() {
        return (
            <div className='name-form'>
                <input
                    type='text'
                    placeholder='Enter your name'
                    value={this.state.name}
                    onChange={this.handleNameChange.bind(this)}
                />
                <button className='name-form' onClick={this.onSubmit}>
                    START
                </button>
            </div>
        );
    }
}

GameSetup.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};


export default GameSetup;

