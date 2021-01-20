import React, {Component} from 'react'
import {connect} from 'react-redux'
import {gettingSingleDrink} from '../store/singleDrink'
import {me} from '../store/user'

import {addingTeaToCart} from '../store/cart'

class SingleTea extends Component {
  constructor(props) {
    super(props)
    this.onAddToCartHandler = this.onAddToCartHandler.bind(this)
  }
  componentDidMount() {
    this.props.loadSingleTea(this.props.match.params.teaId)
  }
  // componentDidUpdate () {
  //   this.props.loadUser()
  // }
  onAddToCartHandler(orderId, tea) {
    const singleTea = this.props.singleTeaInReact
    if (this.props.user.id) {
      this.props.addTeaToCart(orderId, tea)
    } else {
      let products = []
      if (localStorage.getItem('products')) {
        products = JSON.parse(localStorage.getItem('products'))
      }
      if (products.some(product => product.id === singleTea.id)) {
        products.map(product => {
          if (product.id === singleTea.id) product.quantity++
        })
      } else {
        singleTea.quantity = 1
        products.push(singleTea)
      }
      localStorage.setItem('products', JSON.stringify(products))
    }
  }
  render() {
    const {singleTeaInReact, user} = this.props
    let activeOrder
    if (user.orders) activeOrder = user.orders.filter(order => order.active)
    return (
      <div>
        <main id="individual-tea">
          <div>
            <p>type: {singleTeaInReact.type}</p>
            <p> flavor: {singleTeaInReact.flavor}</p>
            <p> topping: {singleTeaInReact.topping}</p>
            <p> price: ${singleTeaInReact.price / 100}</p>
            <button
              id="addToCart"
              type="submit"
              name="addToCart"
              onClick={() =>
                this.onAddToCartHandler(
                  user.orders ? activeOrder[0].id : null,
                  singleTeaInReact
                )
              }
            >
              ADD To Cart
            </button>
          </div>
        </main>
        <div />
      </div>
    )
  }
}
const mapStateToProps = state => {
  return {
    singleTeaInReact: state.singleDrinkReducer,
    user: state.user
  }
}

const mapDispatchToProps = dispatch => {
  return {
    loadSingleTea: teaId => dispatch(gettingSingleDrink(teaId)),
    addTeaToCart: (orderId, tea) => dispatch(addingTeaToCart(orderId, tea)),
    loadUser: () => dispatch(me())
  }
}

const connectSingleTea = connect(mapStateToProps, mapDispatchToProps)(SingleTea)

export default connectSingleTea
