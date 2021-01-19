import React from 'react'

export const Pagination = ({teasPerPage, totalTeas, paginate}) => {
  const pageNumber = []

  for (let i = 1; i <= Math.ceil(totalTeas / teasPerPage); i++) {
    pageNumber.push(i)
  }

  return (
    <nav>
      <ul className="pagination">
        {pageNumber.map(number => (
          <li key={number} className="pageItem">
            <span onClick={() => paginate(number)} className="pageLink">
              {number}
            </span>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Pagination
