import React from 'react'

const CartItem = ({product}) => {
  return (
    <div className="cartItem">
      <div>TYPE: {product.type}</div>
      <div>PRICE: ${product.price / 100}</div>
      <div>QUANTITY: {product.orderItem.quantity}</div>
      <button type="button">X</button>
    </div>
  )
}

export default CartItem
