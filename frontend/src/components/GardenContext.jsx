import React, { createContext, useState, useEffect } from 'react';
import { get_gardens_listener } from '../controllers/firebase_controller';

const GardenContext = createContext([]);

export const GardenProvider = ({ children }) => {
  const [gardens, setGardens] = useState([]);
  const [currentGarden, setCurrentGarden] = useState("")

  useEffect(() => {
    const unsubscribe = get_gardens_listener(newGardens => {
      setGardens(newGardens);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <GardenContext.Provider value={{ gardens, setGardens, currentGarden, setCurrentGarden }}>
      {children}
    </GardenContext.Provider>
  );
};

export default GardenContext;
