// React

import { createContext, useState } from "react";

export const CartProductsContext = createContext();

export const CartProductsProvider = ({ children }) => {

    const [productInformation, setProductInformation] = useState({});

    return (
        <CartProductsContext.Provider value={{ productInformation, setProductInformation }}>
            {children}
        </CartProductsContext.Provider>
    )
}