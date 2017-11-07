import React from 'react';

import {formatTime} from '../helpers';

export default ({
  minutes,
  seconds,
  danger
}) => {
  return (
    <div className="col-4 text-center mx-auto" id="timer">
      <h2 style={{color: danger ? 'red' : '#000'}}>{formatTime(minutes, seconds)}</h2>
    </div>
  );
};
