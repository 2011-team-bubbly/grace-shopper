import React, {useState} from 'react'
import QuantityForm from './QuantityForm'

const CartItem = ({product, handleRemove}) => {
  const [curQuantity, setCurQuantity] = useState(
    product.orderItem ? product.orderItem.quantity : product.quantity
  )
  const handleQuantity = evt => {
    setCurQuantity(evt.target.value)
  }
  return (
    <div className="cartItem">
      <div>TYPE: {product.type}</div>
      <div>PRICE: ${product.price / 100}</div>
      <div>
        QUANTITY:{' '}
        <QuantityForm
          product={product}
          curQuantity={curQuantity}
          handleQuantity={handleQuantity}
        />
        {/* {product.orderItem ? product.orderItem.quantity : product.quantity} */}
      </div>
      <button type="button" onClick={() => handleRemove(product.id)}>
        X
      </button>
    </div>
  )
}

export default CartItem
