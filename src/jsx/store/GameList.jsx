import React, { useState } from 'react'
import {apiFetch} from "../../contexts/apiFetch";
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
// import PaginationFunc from './PaginationFunc'
import ReactPaginate from 'react-paginate';
import Stack from '@mui/material/Stack';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Col from 'react-bootstrap/Col';
import './gamelist.css'
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBRipple,
  MDBCardHeader,
  MDBCardFooter,
  MDBContainer, MDBRow, MDBCol
} from 'mdb-react-ui-kit';

import PaginationFunc from './PaginationFunc';

function GameList({gamesList}) {

const [isLoading, setIsLoading] = useState(false)
const [isFlipped, setIsFlipped] = useState(false)
const [currentGamePage, setCurrentGamePage] = useState(1)
const [gamePerPage, setGamePerPage] = useState(12)
const [total, setTotal] = useState(5)
const [minPages, setMinPages] = useState(0)
const [pages, setPages] = useState(5)

const pagesVisited = currentGamePage

      //Current game
    console.log(gamesList);
      const indexOfLastGame = currentGamePage * gamePerPage
      const indexOfFirstGame = indexOfLastGame - gamePerPage
      const currentGames = gamesList.slice(indexOfFirstGame,indexOfLastGame)

      //Change page
      const paginate = (pageNumber)=>{
        setCurrentGamePage(pageNumber)

      }
    
      // console.log(`${}`);
      function handleFlip (e){
        e.preventDefault()
        setIsFlipped(prev=>!prev)
      }
    //   let active = 1;
      let pageNumbers = [];
      for(let i = 1; i <= Math.ceil(gamesList.length/ gamePerPage); i++) {
        pageNumbers.push(i);
    }
    
    const handleNext = ()=>{
      setCurrentGamePage(currentGamePage + 1)
      if(currentGamePage + 1 > total){
        setTotal(total + pages )
        setMinPages(minPages + pages )
      }
    }
    const handlePrev = ()=>{
      setCurrentGamePage(currentGamePage - 1)
      if((currentGamePage - 1 )% pages == 0){
        setTotal(total - pages )
        setMinPages(minPages - pages )
      }
    }

    const loadMoreGames =()=>{
      setGamePerPage(gamePerPage => gamePerPage + 5)
      console.log('clicked');
    }
   
    let pageCount = Math.ceil(gamesList.length/ gamePerPage)
  return (
    <div >
      
        {isLoading && <h1>Loading....</h1>}
        
        <Container className='container1' >
       
        {!isLoading && currentGames.map(game =>{
            return (
              
                <React.Fragment key={game.id}>




            <Col id='gameListResponsiveCard' xs={3}  >
            <ul>
              { <CardGroup className='card-group1'>
                <Card  className='card1' >

                  
            <Card.Img src={game.thumbnail} variant="top">
         
            </Card.Img>
            <Card.Body className='card-body1'>
           
              <Card.Title className='card-title1' >{game.title}</Card.Title>
              <Card.Text className='card-text1' >
              {game.short_description}
              </Card.Text>
              <Card.Text className='card-text1' >
              {game.genre}
              </Card.Text>
              <Card.Text className='card-text1' >
              Official Website
              </Card.Text>
              {/* <MDBBtn href='#'> */}
              <div className='moreInfoBtn' id='button-4'>
               <div id='underline'></div>
              <Link className='infoBtn' to={`/store/${game.id}`} style={{ margin: '1rem' }}>

                  <span>More Info</span>
                  </Link>
                  </div>
              {/* </MDBBtn> */}
            </Card.Body>
            <Card.Footer    className='card-footer1' >
            <small >{game.publisher} | {game.platform} </small>
            </Card.Footer >
            </Card>
          </CardGroup> } 
          </ul>
          

  
                  
                       
                        </Col>
                     
                </React.Fragment>
            )
          })}
          
          </Container>

          
        <PaginationFunc minPages={minPages} total={total} gamePerPage={gamePerPage} totalGames={gamesList.length} gamesList={gamesList} paginate={paginate} handleNext={handleNext} handlePrev={handlePrev} pages={pages}  currentGamePage={currentGamePage} loadMoreGames={loadMoreGames} />
          
          {/* <button onClick={loadMoreGames} className='loadMoreBtnGames'>Load More</button> */}
          
       

    </div>
  )
}

export default GameList