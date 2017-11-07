export const formatTime = (minutes, seconds) => {
  return (
    (String(minutes).length === 1 ? `0${minutes}` : String(minutes))
    + ':'
    + (String(seconds).length === 1 ? `0${seconds}` : String(seconds))
  );
};
