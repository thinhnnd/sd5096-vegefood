interface IProduct {
  id: number
  productName: string
  productDesc: string
  saleRate: number
  price: number
  productImageUrl: string
  categoryId: number
  isFeatured: boolean
  sellPrice?: number
}

export default IProduct
