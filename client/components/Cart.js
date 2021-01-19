import React, {useState, useEffect} from 'react'
import {connect} from 'react-redux'
import CartItem from './CartItem'
import {fetchOrders, removeItem} from '../store/cart'
import {me} from '../store/user'

const Cart = ({user, loadOrderItems, cartItems, loadUser, deleteItem}) => {
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
          setProducts([])
        }
        let localCart = JSON.parse(localStorage.getItem('products'))
        if (localCart) setProducts(...products, localCart)
      }
      funk()
    },
    [user]
  )

  useEffect(
    () => {
      if (user) {
        setProducts(cartItems)
      } else {
        setProducts([])
      }
    },
    [cartItems]
  )
  const handleRemove = productId => {
    if (user) {
      deleteItem(user.orders[0].id, productId)
    } else {
      let cart = JSON.parse(localStorage.getItem('products'))
      let newCart = cart.filter(item => {
        item.id !== productId
      })
      setProducts(newCart)
      localStorage.setItem('products', JSON.stringify(newCart))
    }
  }

  const handleCartItems = () => {
    console.log('products', products)
    return products.map(product => (
      <CartItem
        key={product.id}
        product={product}
        handleRemove={handleRemove}
      />
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
    // loadUser: () => dispatch(me()),
    deleteItem: (orderId, teaId) => dispatch(removeItem(orderId, teaId))
  }
}

export default connect(mapState, mapDispatch)(Cart)
