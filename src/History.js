import React from 'react';
import HistoryEntry from './HistoryEntry';
import PropTypes from 'prop-types';


const History = (props) => {
    const historyEntries = props.attempts.map((attempt) => {
        return (
            <HistoryEntry count={attempt.count} timeDiff={attempt.timeDiff} key={attempt.id}/>
        );
    });
    return (
        <div className="history-entries">
            {historyEntries}
        </div>
    );
};

History.propTypes = {
    attempts: PropTypes.arrayOf(PropTypes.shape({
        count: PropTypes.number,
        timeDiff: PropTypes.number,
        id: PropTypes.number
    })).isRequired
};

export default History;
