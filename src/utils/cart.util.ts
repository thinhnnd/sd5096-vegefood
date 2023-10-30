import ICartItem from '../models/interfaces/cart-item.interface'

const Storage = (cartItems: ICartItem[]) => {
  localStorage.setItem('cartItems', JSON.stringify(cartItems.length > 0 ? cartItems : []))
}

export const sumCartItems = (cartItems: ICartItem[]) => {
  Storage(cartItems)
  let cartTotalQuantity: number = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
  let cartTotalPrice: number = cartItems.reduce((total, cartItem) => total + cartItem.sellPrice * cartItem.quantity, 0)
  return { cartTotalQuantity, cartTotalPrice }
}
