import React from 'react'

export const Pagination = ({teasPerPage, totalTeas, paginate}) => {
  const pageNumber = []

  for (let i = 1; i <= Math.ceil(totalTeas / teasPerPage); i++) {
    pageNumber.push(i)
  }
  if (pageNumber.length > 1) {
    return (
      <nav>
        {' '}
        <h3> More Teas</h3>
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
  return <nav> </nav>
}

export default Pagination
