import React, { useEffect, useState } from 'react'

import './pagination.css'

import { ReceiptRounded } from '@mui/icons-material';

function PaginationFunc ({gamePerPage,totalGames,paginate,gamesList,total,minPages,handleNext,handlePrev,pages,handleDisablePrevBtn,currentGamePage,loadMoreGames}){
    
    const pageNumbers = []

    for(let i = 1; i <= Math.ceil(totalGames/ gamePerPage); i++) {
        pageNumbers.push(i)
    }

    let pageIncrementDots = null

    if(pageNumbers.length > total){
        pageIncrementDots = <li className='paginationButtonNext'  onClick={()=>{handleNext()}}>&hellip;</li>
    }
    let pageDecrementDots = null

    if(minPages >= 1){
        pageDecrementDots = <li className='paginationButtonNext'  onClick={handlePrev}>&hellip;</li>
    }
   
    return (
      <>
      
      { <ul className="paginations">
      <button className='paginationButtonPrev' onClick={handlePrev}
      disabled={currentGamePage == pageNumbers[0] ? true : false}
      > &laquo; Prev </button>
      {pageDecrementDots}
      {pageNumbers.map(number=>{ 
        if(number < total+1 && number > minPages){
            
           return (
              <li key={number} className="page-item">
                  <a onClick={()=> paginate(number)}  className={currentGamePage == number ? 'active':null}>
                      {number}
                  </a>
              </li>
          )
        }else{
            return null
        }
      })}
      {pageIncrementDots}
      <button disabled={currentGamePage == pageNumbers[pageNumbers.length-1]? true : false} className='paginationButtonNext' onClick={()=>{handleNext()}}> Next &raquo;</button>
      
                     
  {/* <button className='paginationButtonNext' onClick={loadMoreGames}>LoadMore</button> */}
  </ul> } 
{/* { <ul className="pagination">
      {pageNumbers.map(number=> (
          <li key={number} className="page-item">
              <a onClick={()=> paginate(number)}  className='page-link'>
                  {number}
              </a>
          </li>
      ))}
                     
  </ul> }
         */}
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