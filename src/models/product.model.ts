import IProduct from './interfaces/product.interface'

export class Product implements IProduct {
  id: number
  productName: string
  productDesc: string
  saleRate: number
  price: number
  productImageUrl: string
  categoryId: number
  isFeatured: boolean
  sellPrice?: number | undefined

  constructor(product: IProduct) {
    this.id = product.id
    this.productName = product.productName
    this.productDesc = product.productDesc
    this.saleRate = product.saleRate
    this.price = product.price
    this.productImageUrl = product.productImageUrl
    this.categoryId = product.categoryId
    this.isFeatured = product.isFeatured
    this.setupSellPrice()
  }

  private setupSellPrice(): void {
    if (this.saleRate > 0) this.sellPrice = this.price - (this.price * this.saleRate) / 100
    else this.sellPrice = this.price
  }
}
