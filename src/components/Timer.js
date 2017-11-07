import React from 'react';

import {formatTime} from '../helpers';

export default ({
  minutes,
  seconds,
  danger
}) => {
  return (
    <div className="col-12 text-center" id="timer">
      <h2 style={{color: danger ? 'red' : '#482234'}}>{formatTime(minutes, seconds)}</h2>
    </div>
  );
};
