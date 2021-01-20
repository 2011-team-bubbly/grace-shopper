import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import AdminPage from '../components/Admin'
/**
 * COMPONENT
 */
export const UserHome = props => {
  const {email} = props
  const {admin} = props

  return <div>{admin ? <AdminPage /> : <h3>Welcome, {email}</h3>}</div>
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    email: state.user.email,
    admin: state.user.admin
  }
}

export default connect(mapState)(UserHome)

/**
 * PROP TYPES
 */
UserHome.propTypes = {
  email: PropTypes.string
}
