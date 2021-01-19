import React, {useState, useEffect} from 'react'
import {connect} from 'react-redux'
import CartItem from './CartItem'
import PaginationCart from './PaginationCart'

const Cart = ({user}) => {
  const [products, setProducts] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [productsPerPage] = useState(3)

  useEffect(() => {
    if (user) {
      //axios request to get all their Order items?
      let localCart = JSON.parse(localStorage.getItem('products'))
      if (localCart) setProducts(localCart)
    } else {
      let localCart = JSON.parse(localStorage.getItem('products'))
      if (localCart) setProducts(localCart)
    }
  }, [])

  const indexOfLastProduct = currentPage * productsPerPage
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  )

  const paginate = pageNumber => setCurrentPage(pageNumber)

  const handleCartItems = () => {
    return currentProducts.map(product => (
      <CartItem key={product.id} product={product} />
    ))
  }

  const handleSubtotal = () => {
    let subtotal = products.reduce((accumulator, currentVal) => {
      return accumulator + currentVal.price
    }, 0)

    return <div>SUBTOTAL: ${subtotal / 100}</div>
  }

  const handleCart = () => {
    return (
      <div>
        {handleSubtotal()} {handleCartItems()}
        <PaginationCart
          productsPerPage={productsPerPage}
          totalProducts={products.length}
          paginate={paginate}
        />
      </div>
    )
  }

  return <div id="cart">{products.length ? handleCart() : 'EMPTY'}</div>
}

const mapState = state => {
  return {
    user: state.user.id
  }
}

export default connect(mapState)(Cart)
