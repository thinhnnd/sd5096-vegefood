import { useCart } from '../../context/cart'
import ICartItem from '../../models/interfaces/cart-item.interface'

interface IProps {
  cartItem: ICartItem
}

function CartItem({ cartItem }: IProps) {
  const { productName, sellPrice, quantity, productImageUrl } = cartItem
  const { removeCartItem } = useCart()
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
          <div className='input-group mb-3'>
            <input type='text' name='quantity' className='quantity form-control input-number' min='1' max='100' />
          </div>
        </td>

        <td className='total'>
          {quantity} x ${sellPrice}
        </td>
      </tr>
    </>
  )
}

export default CartItem
