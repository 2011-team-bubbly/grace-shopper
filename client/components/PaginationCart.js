import React from 'react'

export const PaginationCart = ({productsPerPage, totalProducts, paginate}) => {
  const pageNumber = []

  for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
    pageNumber.push(i)
  }
  if (pageNumber.length > 1) {
    return (
      <nav>
        {' '}
        <span> More Cart Items</span>
        <ul className="pagination-cart">
          {pageNumber.map(number => (
            <li key={number} className="pageItem-cart">
              <span onClick={() => paginate(number)} className="pageLink-cart">
                {number}
              </span>
            </li>
          ))}
        </ul>
      </nav>
    )
  }
  return <nav> </nav>
}

export default PaginationCart
