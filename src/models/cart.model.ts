import ICartItem from './interfaces/cart-item.interface'
import ICart from './interfaces/cart.interface'

class CartModel implements ICart {
  cartItems: ICartItem[]
  totalQuantity: number
  totalPrice: number
}

export default CartModel
