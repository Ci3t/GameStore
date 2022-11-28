import React, { useState } from 'react'
import {apiFetch} from "../../contexts/apiFetch";
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import PaginationFunc from './PaginationFunc'
import ReactCardFlip from 'react-card-flip';
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

function GameList({gamesList}) {

const [isLoading, setIsLoading] = useState(false)
const [isFlipped, setIsFlipped] = useState(false)
const [currentGamePage, setCurrentGamePage] = useState(1)
const [gamePerPage, setGamePerPage] = useState(12)


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
  return (
    <div >
      
        {isLoading && <h1>Loading....</h1>}
        
        <Container className='container1' >
        
        {!isLoading && currentGames.map(game =>{
            return (
                <React.Fragment key={game.id}>



{/* <Row > */}
<Col xs={3}  >
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
          

  
                    {/* <li>{game.title}</li>
                    <li>{game.short_description}</li>
                    <li>{game.game_url}</li>
                    <li>{game.platform}</li>
                    <li>{game.publisher}</li>
                    <li><img src={game.thumbnail}/></li>
                    <li>{game.release_date}</li>
                    <li>{game.genre}</li>
                    <Link  to={`/store/${game.id}`} style={{ margin: '1rem' }}>

                        More Info
                        </Link>  */}
                       
                        </Col>
                        {/* </Row> */}
                </React.Fragment>
            )
          })}
          
          </Container>
          
        <PaginationFunc gamePerPage={gamePerPage} totalGames={gamesList.length} paginate={paginate} />
    </div>
  )
}

export default GameList