import React, { useState } from 'react';
import { createContext } from 'react';

export const Container = createContext();

const ContextApi = ({children}) => {
    const [cart,setcart] = useState([]);
  return (
    <Container.Provider value={{cart,setcart}}>
      {children}
    </Container.Provider>
  )
}

export default ContextApi
