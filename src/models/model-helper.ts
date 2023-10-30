import ICartItem from './interfaces/cart-item.interface'
import IProduct from './interfaces/product.interface'

export const convertProductToCartItem = (product: IProduct) => {
  let cartItem: ICartItem = {
    productId: product.id,
    sellPrice: product?.sellPrice || 0,
    productName: product.productName,
    productDesc: product.productDesc,
    productImageUrl: product.productImageUrl,
    quantity: 1
  }

  return cartItem
}
