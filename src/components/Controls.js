import React from 'react';

import 'font-awesome/css/font-awesome.min.css'

export default ({
  start,
  startBreak,
  pause,
  reset,
  changeMins,
  changeSecs,
  showCustom,
  counting,
  customHidden,
  sessionTime,
  initialValue
}) => {
  return (
    <div  className="text-center">
      <div id="buttons" className="row">
        <div className="col-12">
          <button disabled={counting} onClick={sessionTime ? start : startBreak}><i className="fa fa-play"></i></button>&nbsp;&nbsp;
          <button onClick={pause}><i className="fa fa-pause"></i></button>&nbsp;&nbsp;
          <button onClick={reset}><i className="fa fa-refresh"></i></button>
        </div>
      </div>
      <button id="custom" onClick={showCustom}>Customize</button>
      <div id="inputs" className="row">
        {customHidden ? null
        : (
          <div>
            <div className="session col-12">
              <span className="h3">Session:</span>&nbsp;&nbsp;
              <input max="59" min="1" disabled={counting} type="number" onChange={changeMins} defaultValue={initialValue.minutes} />
              <input max="59" min="0" disabled={counting} type="number" onChange={changeSecs} defaultValue={initialValue.seconds} />
            </div>
            <div className="break col-12">
              <span className="h3">Break:</span>&nbsp;&nbsp;
              <input max="59" min="1" disabled={counting} type="number" onChange={changeMins} defaultValue={initialValue.breakMinutes} />
              <input max="59" min="0" disabled={counting} type="number" onChange={changeSecs} defaultValue={initialValue.breakSeconds} />
            </div>
          </div>
        )}
      </div>
      <audio src="../notification.mp3 controls"></audio>
    </div>
  );
};
