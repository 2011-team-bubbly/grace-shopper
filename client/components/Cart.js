import React, {useState, useEffect} from 'react'
import {connect} from 'react-redux'
import CartItem from './CartItem'

import PaginationCart from './PaginationCart'

import {fetchOrders, removeItem, addingTeaToCart} from '../store/cart'

const Cart = ({user, loadOrderItems, cartItems, deleteItem, addToCart}) => {
  const [products, setProducts] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [productsPerPage] = useState(3)

  useEffect(
    () => {
      if (user.orders) {
        loadOrderItems(user.orders[0].id)
      }
    },
    [user]
  )

  useEffect(
    () => {
      console.log('is there a user', !!user.id)
      if (user.id) {
        let localCart = JSON.parse(localStorage.getItem('products'))
        if (localCart) {
          localCart.map(item => addToCart(user.orders[0].id, item))
          localStorage.setItem('products', JSON.stringify([]))
        }
        setProducts(cartItems)

        // loadOrderItems(user.orders[0].id)
        // setProducts([...products, ...cartItems])
      } else {
        let localCart = JSON.parse(localStorage.getItem('products'))
        if (localCart) setProducts(localCart)
      }
    },
    [user, cartItems]
  )

  const handleRemove = productId => {
    if (user) {
      deleteItem(user.orders[0].id, productId)
    } else {
      let cart = JSON.parse(localStorage.getItem('products'))
      let newCart = cart.filter(item => {
        return item.id !== productId
      })
      setProducts(newCart)
      localStorage.setItem('products', JSON.stringify(newCart))
    }
  }

  const indexOfLastProduct = currentPage * productsPerPage
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  )

  const paginate = pageNumber => setCurrentPage(pageNumber)

  const handleCartItems = () => {
    return currentProducts.map(product => (
      <CartItem
        key={product.id}
        product={product}
        handleRemove={handleRemove}
      />
    ))
  }

  const handleSubtotal = () => {
    let subtotal = products.reduce((accumulator, currentVal) => {
      return (
        accumulator +
        currentVal.price *
          (currentVal.orderItem
            ? currentVal.orderItem.quantity
            : currentVal.quantity)
      )
    }, 0)
    return <div>SUBTOTAL: ${subtotal / 100}</div>
  }

  const handleCart = () => {
    return (
      <div>
        {handleSubtotal()} {handleCartItems()}
        <PaginationCart
          productsPerPage={productsPerPage}
          totalProducts={products.length}
          paginate={paginate}
        />
      </div>
    )
  }

  return <div id="cart">{products ? handleCart() : 'EMPTY'}</div>
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
    deleteItem: (orderId, teaId) => dispatch(removeItem(orderId, teaId)),
    addToCart: (orderId, tea) => dispatch(addingTeaToCart(orderId, tea))
  }
}

export default connect(mapState, mapDispatch)(Cart)
