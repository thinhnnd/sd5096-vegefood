import CartEmpty from '../components/carts/CartEmpty'
import CartItem from '../components/carts/CartItem'
import { useCart } from '../context/cart'

function Cart() {
  const { cartItems } = useCart()

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
                  <a href='checkout.html' className='btn btn-primary py-3 px-4'>
                    Apply Coupon
                  </a>
                </p>
              </div>
              <div className='col-lg-4 mt-5 cart-wrap ftco-animate'>
                <div className='cart-total mb-3'>
                  <h3>Estimate shipping and tax</h3>
                  <p>Enter your destination to get a shipping estimate</p>
                  <form action='#' className='info'>
                    <div className='form-group'>
                      <label htmlFor=''>Country</label>
                      <input type='text' className='form-control text-left px-3' placeholder='' />
                    </div>
                    <div className='form-group'>
                      <label htmlFor='country'>State/Province</label>
                      <input type='text' className='form-control text-left px-3' placeholder='' />
                    </div>
                    <div className='form-group'>
                      <label htmlFor='country'>Zip/Postal Code</label>
                      <input type='text' className='form-control text-left px-3' placeholder='' />
                    </div>
                  </form>
                </div>
                <p>
                  <a href='checkout.html' className='btn btn-primary py-3 px-4'>
                    Estimate
                  </a>
                </p>
              </div>
              <div className='col-lg-4 mt-5 cart-wrap ftco-animate'>
                <div className='cart-total mb-3'>
                  <h3>Cart Totals</h3>
                  <p className='d-flex'>
                    <span>Subtotal</span>
                    <span>$20.60</span>
                  </p>
                  <p className='d-flex'>
                    <span>Delivery</span>
                    <span>$0.00</span>
                  </p>
                  <p className='d-flex'>
                    <span>Discount</span>
                    <span>$3.00</span>
                  </p>
                  <hr />
                  <p className='d-flex total-price'>
                    <span>Total</span>
                    <span>$17.60</span>
                  </p>
                </div>
                <p>
                  <a href='checkout.html' className='btn btn-primary py-3 px-4'>
                    Proceed to Checkout
                  </a>
                </p>
              </div>
            </div>
          </div>
        ) : (
          <div className='container'>
            <div className='row justify-content-center'>
              <CartEmpty />
            </div>
          </div>
        )}
      </section>
    </>
  )
}

export default Cart
