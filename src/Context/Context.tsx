'use client';
import { ContextType } from '@/utils/Type/type';
import React, { createContext, ReactNode, useContext, useState } from 'react'

const EcomContext = createContext<ContextType|null>(null);
function Context({children}:{children:ReactNode}) {
    const [navTogg,setNavTogg] = useState(false);
    //Toggle Navbar
    const onHandleNav = () => {
        setNavTogg((prev) => !prev);
    };

  return (
    <EcomContext.Provider value={{navTogg,onHandleNav}}>{children}</EcomContext.Provider>
  )
}

export default Context


export const useEcomHook = () => {
    const ecomHok = useContext(EcomContext);
    if(!ecomHok){
        throw new Error('useEcomHook must be used within a EcomContext.Provider')
    };
    return ecomHok;
};