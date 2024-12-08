import { createContext, useState } from 'react'
import allProduct from '../data/AllProduct'
import newCollection from '../data/NewCollection'

export const Shopcontext = createContext(null)

const getDefaultCart = () => {
    let cart = {}
    for (let index = 0; index < allProduct.length+1; index++) {
        cart[index] = 0
    }
    return cart
}

const ShopContextProvider = (props) => {

    const [cartItem, setCartItem] = useState(getDefaultCart())


    const addToCart = (itemId) => {
        setCartItem((prev) => ({...prev, [itemId]:prev[itemId]+1}))
    }

    const contextValue = { allProduct, newCollection };

    return(
        <Shopcontext.Provider value = {contextValue}>
            {props.children}
        </Shopcontext.Provider>
    )
}

export default ShopContextProvider