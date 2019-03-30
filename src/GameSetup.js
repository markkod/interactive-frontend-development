import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Game from '../src/Game';

class GameSetup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            displayGame: false
        };
        this.onClick = this.onClick.bind(this);
    }
    
    handleNameChange(event) {
        this.setState({name: event.target.value});
    }
    
    onClick() {
        this.setState({name: this.state.name, displayGame: true});
    }
    
    render() {
        if (this.state.displayGame) {
            return <Game name={this.state.name} />;
        } else {
            return (
                <div className='name-form'>
                    {
                        this.state.displayGame && <Game name={this.state.name}/>
                    }
                    <input
                        type='text'
                        placeholder='Enter your name'
                        value={this.state.name}
                        onChange={this.handleNameChange.bind(this)}
                    />
                    <button className='name-form' onClick={this.onClick}>
                        START
                    </button>
                </div>
            );
        }
    }
}

GameSetup.propTypes = {
    onSubmit: PropTypes.func,
};


export default GameSetup;

