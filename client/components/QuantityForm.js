import React, {useState} from 'react'

const QuantityForm = ({curQuantity, handleQuantity, product}) => {
  //onsubmit
  return (
    <form>
      <input
        type="number"
        min="1"
        value={
          product.orderItem ? product.orderItem.quantity : product.quantity
        }
        onChange={handleQuantity}
      />
    </form>
  )
}

export default QuantityForm
