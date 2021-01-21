import React, {Component} from 'react'
import {connect} from 'react-redux'
import {thunkToUpdateTea} from '../store/singleDrink'

class UpdateTeaForm extends Component {
  constructor(props) {
    super(props)
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
    this.props.updateTea(this.props.id, newTea)
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
    const {type, price, flavor, imageUrl, topping, size} = this.state
    const {handleChange, handleSubmit} = this
    return (
      <div className="UpdateTea-Form-wrapper">
        <h3>Update Tea</h3>
        <form onSubmit={handleSubmit} method="post">
          <div>
            <label htmlFor="type">type:</label>
            <input
              name="type"
              type="text"
              value={type}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="flavor">Flavor:</label>
            <input
              name="flavor"
              type="text"
              value={flavor}
              onChange={handleChange}
            />
          </div>

          <div>
            <label htmlFor="topping">Topping:</label>
            <input
              name="topping"
              type="text"
              value={topping}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="price">Price: </label>
            <input
              name="price"
              type="text"
              value={price}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="imageUrl"> image</label>

            <input
              name="imageUrl"
              type="text"
              value={imageUrl}
              onChange={handleChange}
            />
          </div>
          <div>
            <div>
              <label htmlFor="size">size:</label>
              <input
                name="size"
                type="text"
                value={size}
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
    updateTea: (id, tea) => dispatch(thunkToUpdateTea(id, tea))
  }
}

export default connect(null, mapDispatchToProps)(UpdateTeaForm)
