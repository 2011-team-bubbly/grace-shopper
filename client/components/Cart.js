import React, {useState, useEffect} from 'react'
import {connect, useSelector} from 'react-redux'
import CartItem from './CartItem'
import Checkout from './Checkout'

import PaginationCart from './PaginationCart'

import {fetchOrders, removeItem, addingTeaToCart} from '../store/cart'
import {me} from '../store/user'

const Cart = ({
  user,
  loadOrderItems,
  cartItems,
  deleteItem,
  addToCart,
  loadUser
}) => {
  const [products, setProducts] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [productsPerPage] = useState(3)
  const [checkout, setCheckout] = useState(false)

  useEffect(
    () => {
      loadUser()
    },
    [checkout]
  )

  useEffect(
    () => {
      if (user.orders) {
        // loadUser()
        let activeOrder = user.orders.filter(order => order.active)[0]
        loadOrderItems(activeOrder.id)
      }
    },
    [user]
  )

  useEffect(
    () => {
      if (user.id) {
        let activeOrder = user.orders.filter(order => order.active)[0]

        let localCart = JSON.parse(localStorage.getItem('products'))
        if (localCart) {
          localCart.map(item => addToCart(activeOrder.id, item))
          localStorage.setItem('products', JSON.stringify([]))
        }
        console.log('CARTITEMS-----------', cartItems)
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
    if (user.id) {
      let activeOrder = user.orders.filter(order => order.active)[0]
      deleteItem(activeOrder.id, productId)
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

  return (
    <>
      <div id="cart">{products ? handleCart() : 'EMPTY'}</div>

      {products.length ? (
        checkout ? (
          <Checkout
            setCheckout={setCheckout}
            products={products}
            handleSubtotal={handleSubtotal}
            setProducts={setProducts}
          />
        ) : (
          <button type="button" onClick={() => setCheckout(true)}>
            CHECKOUT
          </button>
        )
      ) : null}
    </>
  )
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
    addToCart: (orderId, tea) => dispatch(addingTeaToCart(orderId, tea)),
    loadUser: () => dispatch(me())
  }
}

export default connect(mapState, mapDispatch)(Cart)
