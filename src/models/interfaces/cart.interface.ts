import ICartItem from './cart-item.interface'

interface ICart {
  cartItems: ICartItem[]
  totalQuantity: number
  totalPrice: number
}

export default ICart
