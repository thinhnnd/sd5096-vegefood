import { CategoryItem } from '../components/categories/CategoryItem'
import { CategoryShopNow } from '../components/categories/CategoryShopNow'
import { categories } from '../data/categories'
import { CategoryHomePosition } from '../models/enums/category-home-position.enum'

function Categories() {
  const categoryGroup1 = categories.filter((x) => x.homePosition == CategoryHomePosition.Left)
  const categoryGroup2 = categories.filter((x) => x.homePosition == CategoryHomePosition.Right)

  return (
    <section className='ftco-section ftco-category ftco-no-pt'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-8'>
            <div className='row'>
              <div className='col-md-6 order-md-last align-items-stretch d-flex'>
                <CategoryShopNow />
              </div>
              <div className='col-md-6'>
                {categoryGroup1.map(({ id, categoryThumbnail, categorySlug, categoryName, customClass }) => {
                  return (
                    <CategoryItem
                      key={id}
                      backgroundImage={categoryThumbnail}
                      categoryName={categoryName}
                      categorySlug={categorySlug}
                      customClass={customClass}
                    />
                  )
                })}
              </div>
            </div>
          </div>

          <div className='col-md-4'>
            {categoryGroup2.map(({ id, categoryThumbnail, categorySlug, categoryName, customClass }) => {
              return (
                <CategoryItem
                  key={id}
                  backgroundImage={categoryThumbnail}
                  categoryName={categoryName}
                  categorySlug={categorySlug}
                  customClass={customClass}
                />
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Categories
