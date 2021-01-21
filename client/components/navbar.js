import React, {useState} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'
import Cart from './Cart'

// import AdminPage from './Admin'
const Navbar = ({handleClick, isLoggedIn, admin}) => {
  const [cartOpen, setCartOpen] = useState(false)
  const handleCart = () => {
    setCartOpen(!cartOpen)
  }

  return (
    <div className="nav-bar">
      <h1 className="brand-name">Bubbly Bubbly Tea</h1>
      <nav>
        {isLoggedIn ? (
          <div>
            {/* The navbar will show these links after you log in */}
            <Link to="/home">Home</Link>
            <a href="#" onClick={handleClick}>
              Logout
            </a>
          </div>
        ) : (
          <div>
            {/* The navbar will show these links before you log in */}
            <Link to="/login">Login</Link>
            <Link to="/signup">Sign Up</Link>
          </div>
        )}

        <Link to="/allTeas">All Teas</Link>
        <Link to="/cart">Cart</Link>

        <div className="cart-wrapper">
          <button type="button" onClick={handleCart}>
            CART
          </button>
          {cartOpen ? <Cart /> : null}
        </div>
      </nav>
      <hr />
    </div>
  )
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    isLoggedIn: !!state.user.id,
    admin: state.user.admin
  }
}

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout())
    }
  }
}

export default connect(mapState, mapDispatch)(Navbar)

/**
 * PROP TYPES
 */
Navbar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
