import React, {Component} from 'react'
import {connect} from 'react-redux'
import {gettingSingleDrink} from '../store/singleDrink'

class SingleTea extends Component {
  constructor(props) {
    super(props)
    this.state = {
      type: '',
      falvor: '',
      topping: '',
      size: '',
      price: ''
    }
    this.onAddToChartHandler = this.onAddToChartHandler.bind(this)
  }
  async componentDidMount() {
    await this.props.loadSingleProject(this.props.match.params.teaId)
  }
  onAddToChartHandler() {
    alert('this item has been added to your chart')
  }
  render() {
    const {singleTeaInReact} = this.props
    return (
      <div>
        <main id="individual-tea">
          <body>
            <p>type: {singleTeaInReact.type}</p>
            <p> flavor: {singleTeaInReact.flavor}</p>
            <p> topping: {singleTeaInReact.topping}</p>
            <p> price: {singleTeaInReact.price}</p>
            <button
              id="addToChart"
              type="submit"
              name="addToChart"
              onClick={this.onAddToChartHandler}
            >
              ADD To Chart
            </button>
          </body>
        </main>
        <div />
      </div>
    )
  }
}
const mapStateToProps = state => {
  return {
    singleTeaInReact: state.singleDrinkReducer.drink
  }
}

const mapDispatchToProps = dispatch => {
  return {
    loadSingleTea: teaId => dispatch(gettingSingleDrink(teaId))
  }
}

const connectSingleTea = connect(mapStateToProps, mapDispatchToProps)(SingleTea)

export default connectSingleTea
