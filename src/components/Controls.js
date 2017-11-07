import React from 'react';

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
          <button onClick={start}>Start</button>&nbsp;&nbsp;
          <button onClick={pause}>Pause</button>&nbsp;&nbsp;
          <button onClick={reset}>Reset</button>
        </div>
      </div>
      <button onClick={showCustom}>Customize</button>
      {customHidden ? null
      : (
        <div id="inputs" className="row">
          <div className="input">
            <input disabled={counting} type="number" onChange={changeMins} defaultValue={25} />
          </div>
          <div className="input">
            <input disabled={counting} type="number" onChange={changeSecs} defaultValue={0} />
          </div>
        </div>
      )}
    </div>
  );
};
