import { Link } from 'react-router-dom'
import { useCart } from '../../context/cart'

function AppNavbar() {
  const { totalQuantity } = useCart()
  return (
    <nav className='navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light' id='ftco-navbar'>
      <div className='container'>
        <Link className='navbar-brand' to='/'>
          Vegefoods
        </Link>
        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#ftco-nav'
          aria-controls='ftco-nav'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='oi oi-menu'></span> Menu
        </button>

        <div className='collapse navbar-collapse' id='ftco-nav'>
          <ul className='navbar-nav ml-auto'>
            <li className='nav-item active'>
              <Link className='nav-link' to='/'>
                Home
              </Link>
            </li>
            <li className='nav-item dropdown'>
              <a
                className='nav-link dropdown-toggle'
                href='#'
                id='dropdown04'
                data-toggle='dropdown'
                aria-haspopup='true'
                aria-expanded='false'
              >
                Shop
              </a>
              <div className='dropdown-menu' aria-labelledby='dropdown04'>
                <Link className='dropdown-item' to='/shop'>
                  Shop
                </Link>
                <Link className='dropdown-item' to='/wishlist'>
                  Wishlist
                </Link>
                <Link className='dropdown-item' to='/cart'>
                  Cart
                </Link>
                <a className='dropdown-item' href='checkout.html'>
                  Checkout
                </a>
              </div>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/about'>
                About
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/blog'>
                Blog
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/contact'>
                Contact
              </Link>
            </li>
            <li className='nav-item cta cta-colored'>
              <Link className='nav-link' to='/cart'>
                <span className='icon-shopping_cart'></span>[{totalQuantity}]
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default AppNavbar
