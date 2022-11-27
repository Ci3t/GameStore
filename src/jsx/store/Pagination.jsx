import React from 'react'


 const Pagination = ({gamePerPage,totalGames,paginate}) => {

    const pageNumbers = []

    for(let i = 1; i <= Math.ceil(totalGames/ gamePerPage); i++) {
        pageNumbers.push(i)
    }
  return (
    <nav>
        <ul className="pagination">
            {pageNumbers.map(number=> (
                <li key={number} className="page-item">
                    <a onClick={()=> paginate(number)}  className='page-link'>
                        {number}
                    </a>
                </li>
            ))}
                           
        </ul>
    </nav>
  )
}
export default Pagination