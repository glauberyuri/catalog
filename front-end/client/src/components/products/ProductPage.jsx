import React from 'react'
import { useParams } from 'react-router-dom'
import ProductDetail from './ProductDetail'
import ProductRelated from './ProductRelated'
import { useEffect, useState } from 'react'
import api from "../../Api"
import Skeleton from '../ui/Skeleton'

const ProductPage = ({numCartItems, setNumerCartItems}) => {
  const { slug } = useParams()
  const [products, setProducts] = useState({})
  const [similarProducts, setSimilarProducts ] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    api.get(`detail_product/${slug}`)
      .then(res => {
        setProducts(res.data)
        setSimilarProducts(res.data.similar_products || []);
        console.log(res.data)
        console.log(res.data.similar_products)
        setLoading(false)
      })
      .catch(err => {
        console.log(err.message)
        setLoading(false)
      })
  }, [slug])
  return (
    <div>
      {loading ?  
        <Skeleton type="product-detail"/>  
        :  
        <div>
          <ProductDetail products={products}  setNumerCartItems={setNumerCartItems} similarProducts={similarProducts} numCartItems={numCartItems}/> 
        </div>
      }
    </div>
  )
}

export default ProductPage