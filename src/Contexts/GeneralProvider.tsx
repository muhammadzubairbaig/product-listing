import { createContext, FC, ReactNode, useContext, useState } from "react";
import App from "../App";
import { ProductDto } from "../Interface/Interface";

export type ContextState = {
    items: ProductDto[],
    addToCart: (e: ProductDto[]) => void,
    removeAllItems: (e: string) => void,
    removeItem: (e: string) => void,
}

export const AuthContext = createContext<ContextState | null>(null);


/**
* @props
*/

interface Props {
    children: ReactNode;
}

/**
 * @name GeneralProvider
 * @description Provide the global state variables to the application.
 */
export const GeneralProvider: FC<Props> = ({ children }: Props) => {


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
        {children}
    </AuthContext.Provider>
}

export const UseStateValue = () => useContext(AuthContext) as ContextState;

