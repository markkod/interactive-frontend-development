import React from 'react';
import PropTypes from 'prop-types';

const HistoryEntry = (props) => {
    return (
        <div className="history-entry">
            <h2 className="entry-count">
                Try {props.count}: missed by {props.timeDiff} milliseconds
            </h2>
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
