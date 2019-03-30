import React from 'react';
import PropTypes from 'prop-types';

const HistoryEntry = (props) => {
    return (
        <div className="history-entry">
            <h3 className="entry-count">
                TRY {props.count}: MISSED BY {props.timeDiff} MILLISECONDS
            </h3>
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
