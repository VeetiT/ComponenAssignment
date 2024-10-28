import React from 'react'

function ProductForm({products,chooseProduct,setProduct,quantity,chooseQuantity}) {
  const updateProduct=(event) => {
    const product = products.find((p) => p.name === event.target.value)
    setProduct(product)
  }

  const plus=() => {
    chooseQuantity(quantity + 1)
  }

  const minus=() => {
    if (quantity >1) {
      chooseQuantity(quantity -1)
    }
  }

  return (
    <div>
      <br />
      <b>Select product</b>
      <div>
        <table>
          <tbody>
            <tr>
              <td>
                <p>Product:</p>
              </td>
              <td>
                <select value={chooseProduct.name} onChange={updateProduct}>
                  {products.map((product, index) => (
                    <option key={index} value={product.name}>
                      {product.name} ({product.price}€)
                    </option>
                  ))}
                </select>
              </td>
            </tr>
            <tr>
              <td>
                <p>Quantity:</p>
              </td>
              <td>
                <button onClick={minus}>-</button>
                <span className='quantity-selector'>{quantity}</span>
                <button onClick={plus}>+</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}


export default ProductForm

