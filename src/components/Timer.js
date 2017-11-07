import React from 'react';

import {formatTime} from '../helpers';

export default ({
  minutes,
  breakMinutes,
  seconds,
  breakSeconds,
  danger,
  sessionTime
}) => {
  return (
    <div className="col-12 text-center" id="timer">
      {
        !sessionTime ?
        <div>
          <h2>Break:</h2>
          <h2 style={{color: danger ? '#a82234' : '#482234'}}>{formatTime(breakMinutes, breakSeconds)}</h2>
        </div>
        :
        <div>
          <h2>Session:</h2>
          <h2 style={{color: danger ? '#a82234' : '#482234'}}>{formatTime(minutes, seconds)}</h2>
        </div>
      }
    </div>
  );
};
