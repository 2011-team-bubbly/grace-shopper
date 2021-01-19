import React, {Component} from 'react'
// import {Link, Redirect} from 'react-router-dom'
// import {connect} from 'react-redux'
import AddTeaForm from '../components/AddTeaForm'
// import AllTeas from '../components/AllTeas'

const AdminPage = () => {
  console.log('admin page')
  return (
    <div>
      <AddTeaForm />
    </div>
  )
}

export default AdminPage
