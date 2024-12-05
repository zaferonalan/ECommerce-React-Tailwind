import { useContext } from "react";
import { Shopcontext } from "../Context/ShopContext";

export const useShopContext = () => {
    
    const context = useContext(Shopcontext)

    if (!context) {
        throw new Error("useShopContext must be used within a ShopContextProvider")
    }

    return context
}
