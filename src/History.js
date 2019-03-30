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
            {historyEntries.reverse()}
        </div>
    );
};

History.propTypes = {
    attempts: PropTypes.arrayOf(PropTypes.shape({
        count: PropTypes.number.isRequired,
        timeDiff: PropTypes.number.isRequired,
        id: PropTypes.number.isRequired
    })).isRequired
};

export default History;
