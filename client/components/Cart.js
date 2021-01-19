import React, {useState, useEffect} from 'react'
import {connect} from 'react-redux'
import CartItem from './CartItem'
import {fetchOrders} from '../store/cart'
import {me} from '../store/user'

const Cart = ({user, loadOrderItems, cartItems, loadUser}) => {
  const [products, setProducts] = useState([])

  useEffect(
    () => {
      const funk = async () => {
        console.log('user', user)
        if (user.orders) {
          //axios request to get all their Order items?
          console.log('in useeffect cart')
          loadOrderItems(user.orders[0].id)
          console.log('cartItems', cartItems)
          // setProducts(cartItems)
        } else {
          console.log('failed conditional in Cart')
          // let localCart = JSON.parse(localStorage.getItem('products'))
          // if (localCart) setProducts(localCart)
        }
      }
      funk()
    },
    [user]
  )

  useEffect(
    () => {
      setProducts(cartItems)
    },
    [cartItems]
  )

  const handleCartItems = () => {
    console.log('handleCart', products)
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

  return <div id="cart">{products.length ? handleCart() : 'EMPTY'}</div>
}

const mapState = state => {
  return {
    user: state.user,
    cartItems: state.cart.cartItems
  }
}

const mapDispatch = dispatch => {
  return {
    loadOrderItems: orderId => dispatch(fetchOrders(orderId)),
    loadUser: () => dispatch(me())
  }
}

export default connect(mapState, mapDispatch)(Cart)
