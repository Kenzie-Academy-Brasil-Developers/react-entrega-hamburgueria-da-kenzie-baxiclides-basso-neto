import { api } from './services/api'
import { Header } from './Components/Header/Header'
import { useEffect, useState } from 'react'
import { ProductsList } from './Components/ProductsList/ProductsList'

function App() {
  const [products, setProducts] = useState([])

  useEffect(()=>{
    async function loadProducts(){
      try {
            const response = await api.get('products')
            setProducts(response.data)
      } catch (error) {
        console.log(error)
      }
    }
    loadProducts()
  },[])

  return (
    <div className="App">
      <Header />
      <ProductsList products={products} />
    </div>
  )
}

export default App
