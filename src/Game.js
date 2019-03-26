import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Metronome from './Metronome';
import History from './History';

class Game extends Component {
    constructor(props) {
        super(props);
        this.state = {
            attempts: []
        };
    }
    handleButtonClick({number, timeDiff}) {
        const lastAttempt = this.state.attempts[this.state.attempts.length - 1];
        this.setState({
            attempts: this.state.attempts.concat({number, timeDiff, id: lastAttempt.id + 1})
        });
    }

    render() {
        return (
            <div>
                Hi {this.props.name}, try to click the button exactly every 1000 milliseconds!
                <Metronome />
                <History />

            </div>
        );
    }
}

Game.propTypes = {
    name: PropTypes.string.isRequired
};

export default Game;
