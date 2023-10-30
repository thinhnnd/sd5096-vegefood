import ICartItem from '../../models/interfaces/cart-item.interface'
import { sumCartItems } from '../../utils/cart.util'
import { useCartContext } from './CartContextProvider'

const saveCartItemToLocalStorage = (cartItems: ICartItem[]) => {
  localStorage.setItem('cartItems', JSON.stringify(cartItems.length > 0 ? cartItems : []))
}

const useCart = () => {
  const { totalPrice, totalQuantity, cartItems, setCartItems, setTotalPrice, setTotalQuantity } = useCartContext()

  const updateQuantitySafely = (currentCartItem: ICartItem, targetCartItem: ICartItem, quantity: number): ICartItem => {
    if (currentCartItem.productId === targetCartItem.productId) {
      return Object.assign({
        ...currentCartItem,
        quantity: currentCartItem.quantity + quantity
      })
    } else {
      return currentCartItem
    }
  }

  const addToCart = (newCartItem: ICartItem) => {
    let updatedCartItems
    const isProductAlreadyInCart = cartItems.some((cartItem: ICartItem) => newCartItem.productId == cartItem.productId)

    if (isProductAlreadyInCart) {
      updatedCartItems = cartItems.map((cartItem: ICartItem) => {
        return updateQuantitySafely(cartItem, newCartItem, newCartItem.quantity)
      })
    } else {
      updatedCartItems = [...cartItems, newCartItem]
    }

    setCartItems(updatedCartItems)
    const { cartTotalPrice, cartTotalQuantity } = sumCartItems(updatedCartItems)
    setTotalPrice(cartTotalPrice)
    setTotalQuantity(cartTotalQuantity)
    console.log('cart after added ', updatedCartItems)
    saveCartItemToLocalStorage(updatedCartItems)
  }

  const removeCartItem = (cartItemToRemove: ICartItem) => {
    const updatedCartItems = cartItems.filter(
      (cartItem: ICartItem) => cartItemToRemove.productId !== cartItem.productId
    )

    setCartItems(updatedCartItems)
    const { cartTotalPrice, cartTotalQuantity } = sumCartItems(updatedCartItems)
    setTotalPrice(cartTotalPrice)
    setTotalQuantity(cartTotalQuantity)
    saveCartItemToLocalStorage(updatedCartItems)
  }

  const increaseCartItemQuantity = (cartItemToIncrease: ICartItem) => {
    const updatedCartItems = cartItems.map((cartItems: ICartItem) => {
      return updateQuantitySafely(cartItems, cartItemToIncrease, +1)
    })

    setCartItems(updatedCartItems)
    const { cartTotalPrice, cartTotalQuantity } = sumCartItems(updatedCartItems)
    setTotalPrice(cartTotalPrice)
    setTotalQuantity(cartTotalQuantity)
    saveCartItemToLocalStorage(updatedCartItems)
  }

  const decreaseCartItemQuantity = (cartItemToIncrease: ICartItem) => {
    const updatedCartItems = cartItems.map((cartItems: ICartItem) => {
      return updateQuantitySafely(cartItems, cartItemToIncrease, -1)
    })

    setCartItems(updatedCartItems)
    const { cartTotalPrice, cartTotalQuantity } = sumCartItems(updatedCartItems)
    setTotalPrice(cartTotalPrice)
    setTotalQuantity(cartTotalQuantity)
    saveCartItemToLocalStorage(updatedCartItems)
  }

  return {
    cartItems,
    addToCart,
    removeCartItem,
    increaseCartItemQuantity,
    decreaseCartItemQuantity,
    totalPrice,
    totalQuantity
  }
}

export default useCart
