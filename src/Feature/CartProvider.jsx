import React, { createContext, useReducer } from 'react'
import CartReducer from './CartReducer';


 // eslint-disable-next-line react-refresh/only-export-components
 export const CartContex=createContext();
const CartProvider = ({children}) => {

    const [cart,dispatch]=useReducer(CartReducer,[])
  return (
    <CartContex.Provider value={{cart,dispatch}}>
{children}
    </CartContex.Provider>
  )
}

export default CartProvider