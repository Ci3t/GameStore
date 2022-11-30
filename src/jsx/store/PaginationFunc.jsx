import React from 'react'

import './pagination.css'



function PaginationFunc ({gamePerPage,totalGames,paginate,total,minPages,handleNext,handlePrev,currentGamePage}){
    
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
                  <a onClick={()=> paginate(number)}  className={currentGamePage == number ? 'active3':null}>
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
      
                     
 
  </ul> } 

      </>
    );
}
export default PaginationFunc


 



