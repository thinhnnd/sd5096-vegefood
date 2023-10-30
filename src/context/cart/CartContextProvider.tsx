import { createContext, useContext, useState } from 'react'
import { ICartContext } from '../../models/interfaces/cart-context.interface'
import ICartItem from '../../models/interfaces/cart-item.interface'
import { sumCartItems } from '../../utils/cart.util'

const CartContext = createContext<ICartContext | undefined>(undefined)

const useCartContext = (): ICartContext => {
  const context = useContext(CartContext)

  if (!context) {
    throw new Error('useCartContext must be used within a CartProvider')
  }

  return context
}

const CartProvider = (props: any) => {
  const storage = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems') ?? '[]') : []

  const { cartTotalPrice, cartTotalQuantity } = sumCartItems(storage)
  const [cartItems, setCartItems] = useState<ICartItem[]>(storage)
  const [totalQuantity, setTotalQuantity] = useState<number>(cartTotalQuantity)
  const [totalPrice, setTotalPrice] = useState<number>(cartTotalPrice)

  const CartContextValue: ICartContext = {
    cartItems,
    setCartItems,
    totalPrice,
    totalQuantity,
    setTotalQuantity,
    setTotalPrice
  }

  return <CartContext.Provider value={CartContextValue} {...props} />
}

export { CartProvider, useCartContext }
