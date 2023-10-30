import CartEmpty from '../components/carts/CartEmpty'
import CartItem from '../components/carts/CartItem'
import { useCart } from '../context/cart'
import StripeCheckoutButton from '../components/StripeCheckoutButton'
import { useState } from 'react'
import CartPurchased from '../components/carts/CartPurchased'

function Cart() {
  const { cartItems, totalPrice, cleanCartItems } = useCart()
  const [isPurchased, setIsPurchased] = useState(false)

  let shippingCost = 0
  let discountAmount = 0
  let isDiscountApplied: boolean = false
  let isShippingApplied: boolean = false

  let price = totalPrice + shippingCost - discountAmount
  const handleCheckoutSuccess = (token: any) => {
    setIsPurchased(true)
    cleanCartItems()
  }
  return (
    <>
      <section className='ftco-section ftco-cart'>
        {cartItems.length > 0 ? (
          <div className='container'>
            <div className='row'>
              <div className='col-md-12 ftco-animate'>
                <div className='cart-list'>
                  <table className='table'>
                    <thead className='thead-primary'>
                      <tr className='text-center'>
                        <th>&nbsp;</th>
                        <th>&nbsp;</th>
                        <th>Product name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      {cartItems.map((cartItem) => {
                        return <CartItem key={cartItem.productId} cartItem={cartItem} />
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className='row justify-content-end'>
              <div className='col-lg-4 mt-5 cart-wrap ftco-animate'>
                <div className='cart-total mb-3'>
                  <h3>Coupon Code</h3>
                  <p>Enter your coupon code if you have one</p>
                  <form action='#' className='info'>
                    <div className='form-group'>
                      <label htmlFor=''>Coupon code</label>
                      <input type='text' className='form-control text-left px-3' placeholder='' />
                    </div>
                  </form>
                </div>
                <p>
                  <a href='#' className='btn btn-primary py-3 px-4'>
                    Apply Coupon
                  </a>
                </p>
              </div>
              <div className='col-lg-4 mt-5 cart-wrap ftco-animate'>
                <div className='cart-total mb-3'>
                  <h3>Cart Totals</h3>
                  <p className='d-flex'>
                    <span>Subtotal</span>
                    <span>${totalPrice}</span>
                  </p>
                  <p className='d-flex'>
                    <span>Delivery</span>
                    <span>${shippingCost}</span>
                  </p>
                  <p className='d-flex'>
                    <span>Discount</span>
                    <span>${discountAmount}</span>
                  </p>
                  <hr />
                  <p className='d-flex total-price'>
                    <span>Total</span>
                    <span>${price}</span>
                  </p>
                </div>
                <p>
                  <StripeCheckoutButton onSuccess={handleCheckoutSuccess} price={price} />
                </p>
                <p className='alert alert-danger'>
                  *Please use the following test credit card for payments*
                  <br />
                  4242 4242 4242 4242 - Exp: 01/25 - CVV: 123
                </p>
              </div>
            </div>
          </div>
        ) : (
          <div className='container'>
            <div className='row justify-content-center'>{isPurchased ? <CartPurchased /> : <CartEmpty />}</div>
          </div>
        )}
      </section>
    </>
  )
}

export default Cart
