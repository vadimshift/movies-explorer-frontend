import { useState, useEffect } from 'react';

const useDisplayWidth = () => {
  const userDisplay = typeof window === 'object';

  const [displayWidth, setDisplayWidth] = useState(
    userDisplay ? window.innerWidth : null
  );

  useEffect(() => {
    function setWidth() {
      setDisplayWidth(window.innerWidth);
    }
    if (userDisplay) {
      window.addEventListener('resize', setWidth);
      return () => window.removeEventListener('resize', setWidth);
    }
  }, [userDisplay, setDisplayWidth]);
  return displayWidth;
}

export default useDisplayWidth;