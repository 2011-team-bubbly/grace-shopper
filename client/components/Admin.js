import React, {Component} from 'react'
// import {Link, Redirect} from 'react-router-dom'
// import {connect} from 'react-redux'
import AddTeaForm from '../components/AddTeaForm'
// import AllTeas from '../components/AllTeas'

export default class AdminPage extends Component {
  render() {
    console.log('admin page')
    return (
      <div>
        <div>
          <button id="addToInventory" type="submit" name="addToCart">
            Add New Tea
          </button>
        </div>
        <AddTeaForm />
      </div>
    )
  }
}

// export default connect(null, null)(AdminPage)
