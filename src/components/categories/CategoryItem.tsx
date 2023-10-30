export function CategoryItem({ backgroundImage, categoryName, categorySlug, customClass }: any) {
  return (
    <div
      className={`category-wrap ftco-animate img d-flex align-items-end ${customClass}`}
      style={{ backgroundImage: `url("${backgroundImage}")` }}
    >
      <div className='text px-3 py-1'>
        <h2 className='mb-0'>
          <a href={`categories/${categorySlug}`}>{categoryName}</a>
        </h2>
      </div>
    </div>
  )
}
