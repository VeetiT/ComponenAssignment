import Header from './components/Header'
import ProductForm from './components/ProductForm'
import { useState } from 'react'
import './styles/app.css'
import image from './assets/Sun.jpg'

function App() {
  const products=[
    {name:'Logitech G Pro X Superlight', price: 130},
    {name:'SteelSeries Arctis Nova Pro', price: 300},
    {name:'Asus TUF Gaming Monitor', price: 90},
  ]

  const [chooseProduct, setProduct]= useState(products[0])
  const [quantity, chooseQuantity]= useState(1)
  const total=chooseProduct.price * quantity

  return (
    <div>
      <Header image={image} title="Welcome to the Product Page!" />
      <ProductForm
        products={products}
        chooseProduct={chooseProduct}
        setProduct={setProduct}
        quantity={quantity}
        chooseQuantity={chooseQuantity}/>
    </div>
  )
}

export default App