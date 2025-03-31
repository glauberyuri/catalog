import React from 'react'
import api from '../../Api'
import CardContainer from './CardContainer'
import Carousel from '../ui/Carousel'
import Header from './Header'
import Error from '../ui/Error'
import { useEffect, useState } from 'react'

const HomePage = () => {

  const [products, setProducts] = useState([])  
  const [loading, setLoading] = useState(false) 
  const [error, setError] = useState("")
  
  useEffect(() => {
  setLoading(true)
  api.get("products")
  .then(res => {
    console.log(res.data)
    setProducts(res.data)
    setLoading(false)
    setError("")
  })
  .catch(err => {
    console.log(err.message)
    setLoading(false)
    setError(err.message)
  })
  }, [])  


  return (
    <>
        <Header />
        {error && <Error error={error}/> }
        <Carousel />
        <CardContainer products={products} loading={loading}/>
    </>
  )
}

export default HomePage