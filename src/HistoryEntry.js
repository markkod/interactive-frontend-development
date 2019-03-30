import React from 'react';
import PropTypes from 'prop-types';

const HistoryEntry = (props) => {
    function determineTextColour(timeDiff) {
        if (timeDiff > 200) {
            return 'red';
        } else if (timeDiff < 100) {
            return 'green';
        } else {
            return 'orange';
        }
    }
    
    return (
        <div className="history-entry">
            <p className="entry-count" style={{color: determineTextColour(props.timeDiff)}}>
                TRY {props.count}: MISSED BY {props.timeDiff} MILLISECONDS
            </p>
            {props.children}
        </div>
    );
};

HistoryEntry.propTypes = {
    count: PropTypes.number.isRequired,
    children: PropTypes.node,
    timeDiff: PropTypes.number.isRequired
};

export default HistoryEntry;
