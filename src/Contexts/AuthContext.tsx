import  { createContext, useContext, useState } from "react";
import App from "../App";
import { ContextState, ProductDto } from "../Interface/Interface";
export const AuthContext = createContext<ContextState | null>(null);
 
export const StateContextProvider = () => {

    const [items, setItems] = useState<ProductDto[]>([]);

    const addToCart = (item: ProductDto[]) => {
        setItems((previous) => [...previous, ...item]);
    }

    const removeItem = (id: string) => {
        const newItems = [...items];
        const index = items.findIndex((index: ProductDto) => index.id === id);
        newItems.splice(index, 1);
        setItems(newItems);
    }

    const removeAllItems = (id: string) => {
        const newItems = items.filter((index: ProductDto) => index.id !== id);
        setItems(newItems);
    }

    const ContextState = {
        items,
        addToCart,
        removeAllItems,
        removeItem,
    }

    return <AuthContext.Provider value={ContextState}>
        <App />
    </AuthContext.Provider>
}

export const UseStateValue = () => useContext(AuthContext) as ContextState;

