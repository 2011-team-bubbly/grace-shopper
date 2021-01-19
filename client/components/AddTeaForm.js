import React, {Component} from 'react'
import {connect} from 'react-redux'
// import {addTea} from '../store/drinksReducer'
import {thunkToAddTea} from '../store/TeasReducer'

class AddTeaForm extends Component {
  constructor() {
    super()
    this.state = {
      type: '',
      flavor: '',
      topping: '',
      price: '',
      imageUrl: '',
      size: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    })
  }

  async handleSubmit(evt) {
    evt.preventDefault()
    const newTea = {
      type: this.state.type,
      flavor: this.state.flavor,
      price: this.state.price,
      topping: this.state.topping,
      imageUrl: this.state.imageUrl,
      size: this.state.size
    }
    await this.props.addTea(newTea)
    this.setState({
      type: '',
      flavor: '',
      topping: '',
      price: '',
      imageUrl: '',
      size: ''
    })
  }

  render() {
    const {type, price, imageUrl, topping} = this.state
    const {handleChange, handleSubmit} = this.state
    return (
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Type:{' '}
            <input
              name="type"
              type="text"
              value={type}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Topping:{' '}
            <input
              name="topping"
              type="text"
              value={topping}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Price:{' '}
            <input
              name="price"
              type="text"
              value={price}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Image:{' '}
            <input
              name="imageUrl"
              type="text"
              value={imageUrl}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addTea: tea => dispatch(thunkToAddTea(tea))
  }
}

export default connect(null, mapDispatchToProps)(AddTeaForm)
