import React, {Component} from 'react'
import {connect} from 'react-redux'
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
    evt.preventDefault()
    this.setState({
      [evt.target.name]: evt.target.value
    })
  }

  handleSubmit(evt) {
    evt.preventDefault()

    const newTea = {
      type: this.state.type,
      flavor: this.state.flavor,
      price: this.state.price,
      topping: this.state.topping,
      imageUrl: this.state.imageUrl,
      size: this.state.size
    }
    this.props.addTea(newTea)
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
    console.log('its tea form')
    const {type, price, imageUrl, topping, size} = this.state
    const {handleChange, handleSubmit} = this
    return (
      <div>
        <h3>Add Teas</h3>
        <form onSubmit={handleSubmit} method="post">
          <div>
            <label htmlFor="type">type:</label>
            <input
              name="type"
              type="text"
              defaultValue={type}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="topping">Topping:</label>
            <input
              name="topping"
              type="text"
              defaultValue={topping}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="price">Price: </label>
            <input
              name="price"
              type="text"
              defaultValue={price}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="imageUrl"> image</label>

            <input
              name="imageUrl"
              type="text"
              defaultValue={imageUrl}
              onChange={handleChange}
            />
          </div>
          <div>
            <div>
              <label htmlFor="size">size:</label>
              <input
                name="size"
                type="text"
                defaultValue={size}
                onChange={handleChange}
              />
            </div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addTea: tea => dispatch(thunkToAddTea(tea))
  }
}

export default connect(null, mapDispatchToProps)(AddTeaForm)
