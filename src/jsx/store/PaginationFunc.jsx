import React, { useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate';
import './pagination.css'

function PaginationFunc ({gamePerPage,totalGames,paginate,gamesList}){

    const pageNumbers = []

    for(let i = 1; i <= Math.ceil(totalGames/ gamePerPage); i++) {
        pageNumbers.push(i)
    }
    const [itemOffset, setItemOffset] = useState(0);
    const [currentItems, setCurrentItems] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    let itemsPerPage = 6
  
  useEffect(()=>{
      const endOffset = itemOffset + itemsPerPage;
      console.log(`Loading items from ${itemOffset} to ${endOffset}`);
        setCurrentItems(gamesList.slice(itemOffset, endOffset))
       setPageCount(Math.ceil(gamesList.length / itemsPerPage))

  },[itemsPerPage,gamesList,itemOffset])
  
  
    const handlePageClick = (event) => {
      let newOffset = (event.selected * itemsPerPage) % gamesList.length;
     
      setItemOffset(newOffset);
    };
  
    return (
      <>
      
        <ReactPaginate
          breakLabel="..."
          nextLabel="next >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={10}
          pageCount={pageCount}
          previousLabel="< previous"
          renderOnZeroPageCount={null}
          containerClassName="pagination"
          pageLinkClassName='page-num'
          previousLinkClassName='page-num'
          nextLinkClassName='page-num'
            activeClassName='active'
        />
      </>
    );
}
export default PaginationFunc


 




//   <nav>
  {/* <Pagination>{pageNumbers}</Pagination> */}
 
   {/* { <ul className="pagination">
      {pageNumbers.map(number=> (
          <li key={number} className="page-item">
              <a onClick={()=> paginate(number)}  className='page-link'>
                  {number}
              </a>
          </li>
      ))}
                     
  </ul> }  */}



{/* </nav> */}