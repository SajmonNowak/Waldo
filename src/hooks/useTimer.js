import { useRef, useState } from 'react';

function useTimer() {
  const [timer, setTimer] = useState(0);
  const countRef = useRef(null);

  const start = () => {
    countRef.current = setInterval(() => {
      setTimer((timer) => timer + 1);
    }, 1000);
  };
  
  const stop = () => {
    clearInterval(countRef.current);
  };
  
  const reset = () => {
    clearInterval(countRef.current);
    setTimer(0);
  };

  return {timer, start, stop, reset};
}

export default useTimer;