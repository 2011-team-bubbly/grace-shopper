import React, {useState, useEffect} from 'react'
import {connect} from 'react-redux'
import CartItem from './CartItem'

const Cart = ({user}) => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    if (user) {
      //axios request to get all their Order items?
    } else {
      let localCart = JSON.parse(localStorage.getItem('products'))
      if (localCart) setProducts(localCart)
    }
  }, [])

  const handleCartItems = () => {
    return products.map(product => (
      <CartItem key={product.id} product={product} />
    ))
  }

  const handleSubtotal = () => {
    let subtotal = products.reduce((accumulator, currentVal) => {
      return accumulator + currentVal.price
    }, 0)

    return <div>SUBTOTAL: ${subtotal / 100}</div>
  }

  const handleCart = () => {
    return (
      <div>
        {handleCartItems()} {handleSubtotal()}
      </div>
    )
  }

  return (
    <div id="cart">
      HELLO!
      {products.length ? handleCart() : null}
    </div>
  )
}

const mapState = state => {
  return {
    user: state.user.id
  }
}

export default connect(mapState)(Cart)
