import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Metronome extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
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

    
    handleOnClick() {
        this.setState({count: this.state.count, timeDiff: this.getTimeDiff()}, () => {
            this.props.onSubmit({count: this.state.count, timeDiff: this.state.timeDiff});
        });
    }


    render() {
        return (
            <button onClick={this.handleOnClick.bind(this)}>
                NOW
            </button>
        );
    }
}

Metronome.propTypes = {
    count: PropTypes.number,
    timeDiff: PropTypes.number,
    onSubmit: PropTypes.func.isRequired
};

export default Metronome;
