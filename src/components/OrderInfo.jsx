import React from 'react'

function OrderInfo({product, quantity, total}) {
  return (
    <div className='order'>
      <b>Order info</b>
      <table>
        <thead>
          <tr>
            <th>Product</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{product}</td>
            <td>{quantity}</td>
            <td>{total}€</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default OrderInfo