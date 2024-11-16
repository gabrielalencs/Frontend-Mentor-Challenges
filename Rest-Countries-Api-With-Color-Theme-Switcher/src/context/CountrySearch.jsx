// React

import { createContext } from "react";

export const CountrySearchContext = createContext();

export const CategoryInformationProvider = ({ children }) => {
    
    return (
        <CountrySearchContext.Provider value={{  }}>
            {children}
        </CountrySearchContext.Provider>
    )
};