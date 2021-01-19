import React, {Component} from 'react'
import {connect} from 'react-redux'
import {gettingSingleDrink} from '../store/singleDrink'
import {addingTeaToCart} from '../store/cart'

class SingleTea extends Component {
  constructor(props) {
    super(props)
    this.state = {
      type: '',
      flavor: '',
      topping: '',
      size: '',
      price: Number
    }
    this.onAddToCartHandler = this.onAddToCartHandler.bind(this)
  }
  componentDidMount() {
    this.props.loadSingleTea(this.props.match.params.teaId)
  }
  onAddToCartHandler(orderId, tea) {
    if (this.props.user.id) {
      console.log('in onAddToCart in singleteajs')
      this.props.addTeaToCart(orderId, tea)
    } else {
      let products = []
      if (localStorage.getItem('products')) {
        products = JSON.parse(localStorage.getItem('products'))
      }
      products.push(this.props.singleTeaInReact)
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
                this.onAddToCartHandler(activeOrder[0].id, singleTeaInReact)
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
    addTeaToCart: (orderId, tea) => dispatch(addingTeaToCart(orderId, tea))
  }
}

const connectSingleTea = connect(mapStateToProps, mapDispatchToProps)(SingleTea)

export default connectSingleTea
