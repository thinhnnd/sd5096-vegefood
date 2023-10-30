import { Link } from 'react-router-dom'

function CartPurchased() {
  return (
    <>
      <div className='d-flex flex-column align-items-center'>
        <img style={{ maxWidth: '300px' }} src={`images/cart-purchased.png`} />
        <p>Checkout successfully, want to buy more?</p>
        <Link className='btn btn-primary py-3 px-4' to={'/'}>
          Go back to shop
        </Link>
      </div>
    </>
  )
}

export default CartPurchased
