import React from 'react';

export default ({
  start,
  pause,
  reset,
  counting,
  changeMins,
  changeSecs
}) => {
  return (
    <div>
      <div className="row text-center">
        <div className="col-12 mx-auto">
          <button onClick={start}>Start</button>&nbsp;&nbsp;
          <button onClick={pause}>Pause</button>&nbsp;&nbsp;
          <button onClick={reset}>Reset</button>
        </div>
      </div>
      <div id="inputs" className="row text-center">
        <div className="col-12 mx-auto">
          Min: <input onChange={changeMins} disabled={counting} type="number" step="5" defaultValue={5}/>&nbsp;&nbsp;&nbsp;
          Sec: <input onChange={changeSecs} disabled={counting} type="number" step="5" defaultValue={0}/>
        </div>
      </div>
    </div>
  );
};
