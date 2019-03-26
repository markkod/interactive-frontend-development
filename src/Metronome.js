import React, {Component} from 'react';
import PropTypes from 'prop-types';
import HistoryEntry from './HistoryEntry.js';

class Metronome extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
            timeDiff: 0
        };
    }

    getTimeDiff() {
        const milliseconds = new Date().getMilliseconds();
        if (milliseconds >= 500) {
            return 1000 - milliseconds;
        }
        return milliseconds;
    }

    displayAttempt() {
        this.setState({counter: this.counter + 1, timeDiff: this.getTimeDiff()});
        return (
            <HistoryEntry count={this.counter} timeDiff={this.timeDiff} />
        );
    }


    render() {
        return (
            <button onClick={this.displayAttempt}>
                NOW
            </button>
        );
    }
}

Metronome.propTypes = {
    counter: PropTypes.number.isRequired,
    timeDiff: PropTypes.number.isRequired
};

export default Metronome;
