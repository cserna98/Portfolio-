import React from 'react';
import { useContext,useEffect,useReducer,createContext, useState} from "react";

import habilities from '../../assets/text/habilities.json'

 
export const ContextGlobal = createContext();

export const ContextProvider = ({children}) => {
    const [language,setLanguage] = useState("en")
    const [homecontent,setHomecontent] = useState([])
    

    /* Funcion que se encarga de cambiar lenguaje */
    const languageChanger = () =>{
      setLanguage(language === 'es' ? 'en' : 'es' )
      console.log(language)
    }  
      
      return (
        <ContextGlobal.Provider value={{languageChanger,language}}>
          {children}
        </ContextGlobal.Provider>
      );
}

export const GlobalContext= ()=> useContext(ContextGlobal)