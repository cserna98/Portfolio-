import { useContext,useEffect,useReducer,createContext, useState} from "react";

export const ContextGlobal = createContext();

export const ContextProvider = ({children}) => {
    
   

    return (
        <ContextGlobal.Provider value={""}>
          {children}
        </ContextGlobal.Provider>
      );
}

export const GlobalContext= ()=> useContext(ContextGlobal)