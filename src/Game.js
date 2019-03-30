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
    
    handleButtonClick({count, timeDiff}) {
        const lastAttempt = this.state.attempts[this.state.attempts.length - 1];
        let lastId = 0;
        let lastCount = 0;
        if (lastAttempt !== undefined) {
            lastId = lastAttempt.id;
            lastCount = lastAttempt.count;
        }
        this.setState({
            attempts: this.state.attempts.concat({count: lastCount + 1, timeDiff: timeDiff, id: lastId + 1})
        });
    }
    
    render() {
        return (
            <div>
                Hi {this.props.name}, try to click the button exactly every 1000 milliseconds!
                <Metronome onSubmit={this.handleButtonClick.bind(this)}/>
                <History attempts={this.state.attempts}/>
            </div>
        );
    }
}

Game.propTypes = {
    name: PropTypes.string.isRequired
};

export default Game;
