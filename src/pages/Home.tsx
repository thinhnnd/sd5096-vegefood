import { Carousel } from '../components/slider/Carousel'
import Categories from '../sections/Categories'
import { FeaturedProducts } from '../sections/FeaturedProducts'
import OurFeatures from '../sections/OurFeatures'

function Home() {
  return (
    <>
      <Carousel />
      <OurFeatures />
      <Categories />
      <FeaturedProducts />
    </>
  )
}

export default Home
