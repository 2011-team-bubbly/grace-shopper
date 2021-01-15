import React, {Component} from 'react'
import {connect} from 'react-redux'
import {gettingSingleDrink} from '../store/singleDrink'

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
  onAddToCartHandler() {
    let products = []
    if (localStorage.getItem('products')) {
      products = JSON.parse(localStorage.getItem('products'))
    }
    products.push(this.props.singleTeaInReact)
    localStorage.setItem('products', JSON.stringify(products))
    // alert('this item has been added to your chart')
  }
  render() {
    const {singleTeaInReact} = this.props
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
              onClick={this.onAddToCartHandler}
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
    singleTeaInReact: state.singleDrinkReducer
  }
}

const mapDispatchToProps = dispatch => {
  return {
    loadSingleTea: teaId => dispatch(gettingSingleDrink(teaId))
  }
}

const connectSingleTea = connect(mapStateToProps, mapDispatchToProps)(SingleTea)

export default connectSingleTea
