// ClickContext.js
import React, { createContext, useContext, useState } from 'react';

// Create Context
const ClickContext = createContext();

// Custom hook to use context
export const useClickContext = () => useContext(ClickContext);

// Click Provider to wrap the app with this context
export const ClickProvider = ({ children }) => {
  const [clickCount, setClickCount] = useState(0);

  const incrementClickCount = () => setClickCount(prev => prev + 1);

  return (
    <ClickContext.Provider value={{ clickCount, incrementClickCount }}>
      {children}
    </ClickContext.Provider>
  );
};
