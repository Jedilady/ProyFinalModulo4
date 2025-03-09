import { CategoryFilterList } from '../components/ProductCard'
import Title from '../components/Title'
import ProductPreview from '../components/ProductPreview'

const ProductDetails = () => {
  return (
    <div>
      <ProductPreview/>
      <Title title="Recomendados"/>
      <CategoryFilterList category={"Figuras"}/>
    </div>
  )
}

export default ProductDetails
