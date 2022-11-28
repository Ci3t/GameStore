import React, { useEffect, useState } from 'react'

import './pagination.css'

import { ReceiptRounded } from '@mui/icons-material';

function PaginationFunc ({gamePerPage,totalGames,paginate,gamesList,total,minPages,handleNext}){
    
    const pageNumbers = []

    for(let i = 1; i <= Math.ceil(totalGames/ gamePerPage); i++) {
        pageNumbers.push(i)
    }
   
    return (
      <>
      
{/*      
      { <ul className="pagination">
      {pageNumbers.map(number=>{ 
        if(number < total+1 && number > minPages){
            
           return (
              <li key={number} className="page-item">
                  <a onClick={()=> paginate(number)}  className='page-link'>
                      {number}
                  </a>
              </li>
          )
        }
      })}
      <button onClick={()=>{handleNext()}}>Next</button>
                     
  </ul> }  */}
{ <ul className="pagination">
      {pageNumbers.map(number=> (
          <li key={number} className="page-item">
              <a onClick={()=> paginate(number)}  className='page-link'>
                  {number}
              </a>
          </li>
      ))}
                     
  </ul> }
        
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