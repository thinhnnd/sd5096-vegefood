import { CategoryHomePosition } from '../models/enums/category-home-position.enum'
import ICategory from '../models/interfaces/category.interface'

export const categories: ICategory[] = [
  {
    id: 1,
    categoryThumbnail: 'images/category-1.jpg',
    categorySlug: 'fruits',
    categoryName: 'Fruits',
    customClass: 'mb-4',
    homePosition: CategoryHomePosition.Left
  },
  {
    id: 2,
    categoryThumbnail: 'images/category-2.jpg',
    categorySlug: 'vegetables',
    categoryName: 'Vegetables',
    homePosition: CategoryHomePosition.Left
  },
  {
    id: 3,
    categoryThumbnail: 'images/category-3.jpg',
    categorySlug: 'juices',
    categoryName: 'Juices',
    customClass: 'mb-4',
    homePosition: CategoryHomePosition.Right
  },
  {
    id: 4,
    categoryThumbnail: 'images/category-4.jpg',
    categorySlug: 'dried',
    categoryName: 'Dried',
    homePosition: CategoryHomePosition.Right
  }
]
