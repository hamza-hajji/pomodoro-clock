import React from 'react';

export default ({
  start,
  pause,
  reset
}) => {
  return (
    <div className="col-4 mx-auto text-center">
      <button onClick={start}>Start</button>&nbsp;&nbsp;
      <button onClick={pause}>Pause</button>&nbsp;&nbsp;
      <button onClick={reset}>Reset</button>
    </div>
  );
};
