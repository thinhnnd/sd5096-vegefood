import { categories } from '../../data/categories'

function ProductFilterByCategory() {
  return (
    <ul className='product-category'>
      <li>
        <a href='#' className='active'>
          All
        </a>
      </li>
      {categories.map((category) => {
        return (
          <li key={category.id}>
            <a href='#'>{category.categoryName}</a>
          </li>
        )
      })}
    </ul>
  )
}

export default ProductFilterByCategory
