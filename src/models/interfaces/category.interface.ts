import { CategoryHomePosition } from '../enums/category-home-position.enum'

interface ICategory {
  id: number
  categoryName: string
  categorySlug: string
  categoryThumbnail: string
  customClass?: string
  homePosition: CategoryHomePosition
}

export default ICategory
