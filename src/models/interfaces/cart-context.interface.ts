import ICartItem from './cart-item.interface'

export interface ICartContext {
  cartItems: ICartItem[]
  setCartItems(products: ICartItem[]): void
  totalPrice: number
  totalQuantity: number
  setTotalQuantity(products: any): void
  setTotalPrice(totalPrice: number): void
}
