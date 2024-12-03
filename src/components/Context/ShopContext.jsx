import { createContext } from 'react'
import allProduct from '../../data/AllProduct'
import newCollection from '../../data/NewCollection'

export const Shopcontext = createContext(null)

const ShopContextProvider = (props) => {

    const contextValue = { allProduct, newCollection };

    return(
        <Shopcontext.Provider value = {contextValue}>
            {props.children}
        </Shopcontext.Provider>
    )
}

export default ShopContextProvider