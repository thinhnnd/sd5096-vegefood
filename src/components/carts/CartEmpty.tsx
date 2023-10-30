import { Link } from 'react-router-dom'

function CartEmpty() {
  return (
    <>
      <div className='d-flex flex-column align-items-center'>
        <img style={{ maxWidth: '400px' }} src={`images/empty-cart.png`} />
        <p>Oops your cart is empty</p>
        <Link to={'/'}>Go back to shop</Link>
      </div>
    </>
  )
}

export default CartEmpty
