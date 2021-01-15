import React from 'react'

const CartItem = ({product}) => {
  return (
    <div className="cartItem">
      <div>TYPE: {product.type}</div>
    </div>
  )
}

export default CartItem
