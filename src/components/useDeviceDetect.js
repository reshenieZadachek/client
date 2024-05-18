import { useState, useEffect } from 'react';

const useDeviceDetect = () => {
  const [width, setWidth] = useState(window.screen.width);

  useEffect(() => {
    const handleResize = (event) => {
      setWidth(event.target.screen.width);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [window.screen.width]);
  return {
    width
  };
};

export default useDeviceDetect; 