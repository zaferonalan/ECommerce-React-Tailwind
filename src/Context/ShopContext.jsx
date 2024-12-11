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

    const [cartItems, setCartItems] = useState(getDefaultCart())


    const addToCart = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]:prev[itemId]+1}))
    }

    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]:prev[itemId] - 1}))
    }

    const getTotalCartAmount = () => {
        let totalAmout = 0;
        for(const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemİnfo = allProduct.find((product) => product.id === Number(item))
                totalAmout += cartItems[item] * itemİnfo.new_price
            }
        }

        return totalAmout
    }

    const getTotalCartItems = () => {
        let totalItem = 0;
        for(const item in cartItems) {
            if (cartItems[item] > 0) {
                totalItem += cartItems[item]
            }
        }
        
        return totalItem
    }


    const contextValue = { allProduct, newCollection, cartItems, addToCart, removeFromCart, getTotalCartAmount, getTotalCartItems  };

    return(
        <Shopcontext.Provider value = {contextValue}>
            {props.children}
        </Shopcontext.Provider>
    )
}

export default ShopContextProvider