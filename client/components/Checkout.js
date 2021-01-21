import React from 'react'
import {connect} from 'react-redux'
import {clearCart} from '../store/cart'
import {Redirect, withRouter} from 'react-router-dom'

class Checkout extends React.Component {
  constructor() {
    super()
    this.handleCheckout = this.handleCheckout.bind(this)
  }

  handleCheckout() {
    const {emptyCart, user, setProducts, history, setCheckout} = this.props

    let activeOrder
    if (user.id) {
      if (user.orders)
        activeOrder = user.orders.filter(order => order.active)[0]
      console.log('ACTIVE ORDER', activeOrder)
      console.log('USER', user)
      emptyCart(activeOrder.id, user.id)
    }

    localStorage.setItem('products', JSON.stringify([]))
    setProducts([])
    setCheckout(false)

    history.replace('/allTeas')
    alert('Thank you for your purchase!')
  }

  render() {
    const {products, handleSubtotal, setCheckout} = this.props

    return (
      <div>
        CHECKOUT
        {handleSubtotal()}
        IS THIS OKAY WITH YOU?
        <button type="button" onClick={this.handleCheckout}>
          YES
        </button>
        <button type="button" onClick={() => setCheckout(false)}>
          {' '}
          NO{' '}
        </button>
      </div>
    )
  }
}

const mapState = state => ({
  cartItems: state.cart.cartItems,
  user: state.user
})

const mapDispatch = dispatch => ({
  emptyCart: (orderId, userId) => dispatch(clearCart(orderId, userId))
})

export default withRouter(connect(mapState, mapDispatch)(Checkout))
