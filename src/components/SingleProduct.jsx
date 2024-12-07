import Breadcrum from '../components/Breadcrum'
import ProductDisplay from '../components/ProductDisplay'
import DescriptionBox from '../components/DescriptionBox'
import { useShopContext } from '../hooks/shopHooks'
import { useParams } from 'react-router-dom'
import NewCollection from './NewCollection'
import { useEffect } from 'react'

const SingleProduct = () => {
  const { allProduct } = useShopContext()
  const { productId } = useParams()
  const product = allProduct.find((e) => e.id === Number(productId))

  useEffect(() => {
    window.scrollTo(0,0)
  },)

  return (
    <div className="max-w-7xl mx-auto mb-32 mt-32">
      <Breadcrum product= {product}/>
      <ProductDisplay product= {product}/>
      <DescriptionBox/>
      <NewCollection/>
    </div>
  )
}

export default SingleProduct