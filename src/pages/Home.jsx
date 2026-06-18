import { useEffect, useState } from 'react'
import axios from 'axios'
import ProductCard from '../components/ProductCard'

export default function Home() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    axios.get('/api/products').then(res => setProducts(res.data))
  }, [])

  return (
    <div>
      <h1>Products</h1>
      {products.map(p => <ProductCard key={p._id} product={p} />)}
    </div>
  )
}
