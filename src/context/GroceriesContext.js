import React from 'react';

const GroceriesContext = React.createContext();

export const GroceriesProvider = ({children}) => {
  const groceryItems = [
    { title: 'Strawberries'},
    { title: 'Blueberries'}
  ];
  return <GroceriesContext.Provider value={groceryItems}>{children}</GroceriesContext.Provider>;
};

export default GroceriesContext;