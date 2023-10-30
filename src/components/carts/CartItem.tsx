import { useCart } from '../../context/cart'
import ICartItem from '../../models/interfaces/cart-item.interface'

interface IProps {
  cartItem: ICartItem
}

function CartItem({ cartItem }: IProps) {
  const { productName, sellPrice, quantity, productImageUrl } = cartItem
  const { removeCartItem, increaseCartItemQuantity, decreaseCartItemQuantity } = useCart()
  return (
    <>
      <tr className='text-center'>
        <td className='product-remove'>
          <a role='button' onClick={() => removeCartItem(cartItem)}>
            <span className='ion-ios-close'></span>
          </a>
        </td>

        <td className='image-prod'>
          <div className='img' style={{ backgroundImage: `url(${productImageUrl})` }}></div>
        </td>

        <td className='product-name'>
          <h3>{productName}</h3>
          <p></p>
        </td>

        <td className='price'>${sellPrice}</td>

        <td className='quantity'>
          <button style={{ width: '20px' }} role='button' onClick={() => decreaseCartItemQuantity(cartItem)}>
            &#10094;
          </button>
          <span className='ml-4 mr-4'>{quantity}</span>
          <button style={{ width: '20px' }} role='button' onClick={() => increaseCartItemQuantity(cartItem)}>
            &#10095;
          </button>
        </td>

        <td className='total'>${quantity * sellPrice}</td>
      </tr>
    </>
  )
}

export default CartItem
