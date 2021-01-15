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

  return (
    <div id="cart">
      HELLO!
      {products.map(product => <CartItem key={product.id} product={product} />)}
    </div>
  )
}

const mapState = state => {
  return {
    user: state.user.id
  }
}

export default connect(mapState)(Cart)
