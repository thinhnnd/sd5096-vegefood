import { toast } from 'react-toastify'
import { useCart } from '../../context/cart'
import IProduct from '../../models/interfaces/product.interface'
import { convertProductToCartItem } from '../../models/model-helper'

interface IProps {
  product: IProduct
}

function ProductItem({ product }: IProps) {
  const notify = (productName: string) => toast.success(`${productName} added to cart`)

  const { addToCart } = useCart()
  const handleAddToCart = () => {
    console.log('add to cart ', product)
    let cartItem = convertProductToCartItem(product)
    notify(product.productName)
    addToCart(cartItem)
  }
  return (
    <div className='product'>
      <a href='#' className='img-prod'>
        <img className='img-fluid' src={product.productImageUrl} alt={product.productName} />
        {product.saleRate > 0 ? <span className='status'>{product.saleRate}%</span> : null}
        <div className='overlay'></div>
      </a>
      <div className='text py-3 pb-4 px-3 text-center'>
        <h3>
          <a href='#'>{product.productName}</a>
        </h3>
        <div className='d-flex'>
          <div className='pricing'>
            <p className='price'>
              {product.saleRate > 0 ? (
                <>
                  <span className='mr-2 price-dc'>{product.price}</span>
                  <span className='price-sale'>{product.sellPrice}</span>
                </>
              ) : (
                <span>{product.sellPrice}</span>
              )}
            </p>
          </div>
        </div>
        <div className='bottom-area d-flex px-3'>
          <div className='m-auto d-flex'>
            <a href='#' className='add-to-cart d-flex justify-content-center align-items-center text-center'>
              <span>
                <i className='ion-ios-menu'></i>
              </span>
            </a>
            <a
              role='button'
              onClick={handleAddToCart}
              className='buy-now d-flex justify-content-center align-items-center mx-1'
            >
              <span>
                <i className='ion-ios-cart'></i>
              </span>
            </a>
            <a role='button' className='heart d-flex justify-content-center align-items-center '>
              <span>
                <i className='ion-ios-heart'></i>
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductItem
