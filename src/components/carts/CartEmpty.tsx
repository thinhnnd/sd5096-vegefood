import { Link } from 'react-router-dom'

function CartEmpty() {
  return (
    <>
      <div className='d-flex flex-column align-items-center'>
        <img style={{ maxWidth: '400px' }} src={`images/cart-empty.png`} />
        <p>Oops your cart is empty</p>
        <Link className='btn btn-primary py-3 px-4' to={'/'}>
          Go back to shop
        </Link>
      </div>
    </>
  )
}

export default CartEmpty
