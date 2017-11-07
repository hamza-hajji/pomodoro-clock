import React from 'react';

import 'font-awesome/css/font-awesome.min.css'

export default ({
  start,
  pause,
  reset,
  changeMins,
  changeSecs,
  showCustom,
  counting,
  customHidden
}) => {
  return (
    <div  className="text-center">
      <div id="buttons" className="row">
        <div className="col-12">
          <button onClick={start}><i className="fa fa-play"></i></button>&nbsp;&nbsp;
          <button onClick={pause}><i className="fa fa-pause"></i></button>&nbsp;&nbsp;
          <button onClick={reset}><i className="fa fa-refresh"></i></button>
        </div>
      </div>
      <button id="custom" onClick={showCustom}>Customize</button>
      <div id="inputs" className="row">
        {customHidden ? null
        : (
          <div className="col-12">
              <input max="59" min="0" disabled={counting} type="number" onChange={changeMins} defaultValue={25} />
              <input max="59" min="0" disabled={counting} type="number" onChange={changeSecs} defaultValue={0} />
          </div>
        )}
      </div>
    </div>
  );
};
