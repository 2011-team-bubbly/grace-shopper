import React from 'react'

const CartItem = ({product, handleRemove}) => {
  return (
    <div className="cartItem">
      <div>TYPE: {product.type}</div>
      <div>PRICE: ${product.price / 100}</div>
      <div>
        QUANTITY:{' '}
        {product.orderItem ? product.orderItem.quantity : product.quantity}
      </div>
      <button type="button" onClick={() => handleRemove(product.id)}>
        X
      </button>
    </div>
  )
}

export default CartItem
