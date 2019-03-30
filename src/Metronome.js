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

    createTimeDiff() {
        const milliseconds = new Date().getMilliseconds();
        if (milliseconds >= 500) {
            return 1000 - milliseconds;
        }
        return milliseconds;
        
        // unsure how I should increment the count here as per last feedback,
        // so I got the count working somewhere else (probably a bad practice)
    }

    
    handleOnClick() {
        this.setState({count: this.state.count, timeDiff: this.createTimeDiff()}, () => {
            this.props.onSubmit({count: this.state.count, timeDiff: this.state.timeDiff});
        });
    }


    render() {
        return (
            <div>
                <p>
                
                </p>
                <button onClick={this.handleOnClick.bind(this)}>
                    NOW
                </button>
            </div>
        );
    }
}

Metronome.propTypes = {
    count: PropTypes.number,
    timeDiff: PropTypes.number,
    onSubmit: PropTypes.func.isRequired
};

export default Metronome;
