import ICartItem from './interfaces/cart-item.interface'

export class CartItem implements ICartItem {
  productImageUrl: string
  productName: string
  productDesc: string
  productId: number
  quantity: number
  sellPrice: number
}
