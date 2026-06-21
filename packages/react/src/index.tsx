import React, { useEffect } from 'react';
import { observer } from '@observer-ai/core';

export const ObserverProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  useEffect(() => {
    observer.start();
    return () => {
      observer.stop();
    };
  }, []);

  return <>{children}</>;
};
