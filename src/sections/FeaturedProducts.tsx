import ProductFilterByCategory from '../components/products/ProductFilterByCategory'
import ProductItem from '../components/products/ProductItem'
import { products } from '../data/products'
import { Product } from '../models/product.model'

export function FeaturedProducts() {
  return (
    <section className='ftco-section'>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-md-10 mb-5 text-center'>
            <ul className='product-category'>
              <ProductFilterByCategory />
            </ul>
          </div>
        </div>
        <div className='row'>
          {products.map((product) => {
            let productModel: Product = new Product(product)

            console.log('productModel, ', productModel)
            return (
              <div key={productModel.id} className='col-md-6 col-lg-3 ftco-animate'>
                <ProductItem product={productModel} />
              </div>
            )
          })}
        </div>
        <div className='row mt-5'>
          <div className='col text-center'>
            <div className='block-27'>
              <ul>
                <li>
                  <a href='#'>&lt;</a>
                </li>
                <li className='active'>
                  <span>1</span>
                </li>
                <li>
                  <a href='#'>2</a>
                </li>
                <li>
                  <a href='#'>3</a>
                </li>
                <li>
                  <a href='#'>4</a>
                </li>
                <li>
                  <a href='#'>5</a>
                </li>
                <li>
                  <a href='#'>&gt;</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
