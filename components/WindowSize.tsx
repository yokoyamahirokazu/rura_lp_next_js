import { useState, useEffect, useCallback } from 'react';

const WindowSize = function (): void {
  const isClient = typeof window === 'object';
  const getWindowDimensions = useCallback(() => {
    return {
      width: isClient ? window?.innerWidth : 0,
      height: isClient ? window?.innerHeight : 0,
    };
  }, [isClient]);
  const [, setWindowDimensions] = useState(getWindowDimensions());
  useEffect(() => {
    const onResize = () => {
      setWindowDimensions(getWindowDimensions());
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [getWindowDimensions]);
};

export default WindowSize;
