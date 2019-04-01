import React from 'react';
import PropTypes from 'prop-types';
import MetronomeHit from './MetronomeHit';

const MetronomeHitHistory = ({hits, frequency}) => {
  const hitList = hits.slice().reverse().map((hit, index) =>
    <MetronomeHit
      key={index}
      index={hits.length - index}
      missInMilliseconds={hit.miss}
      missInFractions={hit.miss / frequency}
    />
  );

  return (
    <div className="history">
      {hitList}
    </div>
  );
};

MetronomeHitHistory.propTypes = {
  hits: PropTypes.array.isRequired,
  frequency: PropTypes.number.isRequired
};

export default MetronomeHitHistory;
