
import React, { useEffect } from 'react'
import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import {getGameById} from "../../contexts/apiFetch";
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import './gameinfo.css'
import ListGroup from 'react-bootstrap/ListGroup';
import Carousel from 'react-bootstrap/Carousel';
import GameInfoImgSlider from './GameInfoImgSlider';
import Button from 'react-bootstrap/Button';

function GameInfo() {


  const { id } = useParams();
  const [gameData,setGameData]=useState({})
  const [checkInputRAM,setCheckInputRAM]=useState('')
  const [checkInputCPU,setCheckInputCPU]=useState('')
  const [checkInputGPU,setCheckInputGPU]=useState('')
  const [isLoading,setIsLoading]=useState(false)
  const [checkMSG,setCheckMSG]=useState('')
  const [variant,setVariant]=useState('')
  
  
  useEffect(()=>{
    setIsLoading(true)
    const getGameId = async ()=>{
      
      
      const {data} = await getGameById(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=540`, id)
      console.log(data);
      setGameData(data)
      setIsLoading(false)
    }
    getGameId()
  },[id])

  function handleCheckSubmit (e){
    e.preventDefault()

  }
  const checkGame = ()=>{

    setCheckMSG('')
    if(checkInputGPU.trim() && checkInputCPU.trim() && checkInputRAM.trim()!==""){
      
      
    if(checkInputCPU && checkInputRAM && checkInputGPU){

      if(gameData.minimum_system_requirements.memory !== null || gameData.minimum_system_requirements.memory  !== undefined){
        
        const memory = Object.values(gameData.minimum_system_requirements.memory).slice(0,2).join('')
        console.log(+Object.values(gameData.minimum_system_requirements.memory).slice(0,3).join(''));
        
        if(checkInputRAM < +memory ){
          
          setCheckMSG('You Can Run it On : "LOW" Difficulty')
          setVariant('danger')
        }
        else if (checkInputRAM == +memory ){
          
          setCheckMSG('You Can Run it On : "MEDIUM" Difficulty')
          setVariant('warning')
        }
        else{
          
          setCheckMSG('You Can Run it On : "HIGH OR ULTRA" Difficulty')
          setVariant('success')
        }
        
      }else if (!gameData.minimum_system_requirements){
        if(checkInputRAM < 8){
          setCheckMSG('You Can Run it On : "LOW" Difficulty')
          setVariant('danger')
        }
      else if(checkInputRAM == 8){
        setCheckMSG('You Can Run it On : "MEDIUM" Difficulty')
        setVariant('warning')
      }
      else{
        setCheckMSG('You Can Run it On : "HIGH OR ULTRA" Difficulty')
        setVariant('success')
      }
    }
    
  }
    }else{
      setCheckMSG('Please fill all inputs')
    }
  }
  
  return (
    <div className='gameInfoContainer'>
      <div className='gameInfoBGImageCont'></div>

<CardGroup >
<Card className='gameInfoCard cardInfo ' id={'card-info-group1'}>
        <Card.Img variant="top" src={gameData.thumbnail}  />
        <Card.Body>
          {/* <Card.Title>Game Status: {gameData.status}</Card.Title> */}
          <Card.Text className='card-info-text1'>
          <Card.Header>Game Status: {gameData.status}</Card.Header>
          <ListGroup variant="flush">
        <ListGroup.Item id='list-info-item'>Developers :  {gameData.developer}</ListGroup.Item>
        <ListGroup.Item id='list-info-item'>Publishers :  {gameData.publisher}</ListGroup.Item>
        <ListGroup.Item id='list-info-item'>Release Date : {gameData.release_date
}</ListGroup.Item>
        <ListGroup.Item id='list-info-item'>Platform: {gameData.platform}</ListGroup.Item>
       
      </ListGroup>
          
          </Card.Text >
        </Card.Body>
        <Card.Footer id={'card-info-footerSide'}>
          <small >Api By FreeToGame</small>
        </Card.Footer>
      </Card>
     
    </CardGroup>

    <div className="gameinfoLineSep"></div>

    <ul>
      <li><h1 className='gameInfoTitle'>{gameData.title}</h1></li>

      {/* <li>{gameData.screenshots && gameData.screenshots.map(img=>{
        return (
          <img width={'200px'} src={img.image} alt={'screenshot"Missing"'} />
        )
        
      })}</li> */}
      <GameInfoImgSlider gameData={gameData}/>
      <Card id={'card-info-bodyAbout'}>
      
      <Card.Body >
        <Card.Title id={'about-info-GameH5'}>About The Game</Card.Title>
        <Card.Text  style={{maxWidth:'58em'}}>
        {gameData.description}
        </Card.Text>
       
        <a  id='card-info-officialWeb' target="_blank" href={gameData.game_url}><span>Website</span></a>
        
        <a  id='card-info-officialWeb' target="_blank" href={gameData.freetogame_profile_url}><span>FreeToGame Profile</span></a>
       
      </Card.Body>
    </Card>
      
    {gameData.minimum_system_requirements && 
    <ListGroup id="card-info-list-group-req" variant="flush">
      <ListGroup.Item id="card-info-list-item-req">
      <h2>Requirements</h2>
         </ListGroup.Item >
       <ListGroup.Item id="card-info-list-item-req">
      <div className="ms-2 me-auto">
          <div className="fw-bold"> Graphics: </div>
          {gameData.minimum_system_requirements.graphics}
        </div>
         </ListGroup.Item>
         <ListGroup.Item id="card-info-list-item-req">
      <div className="ms-2 me-auto">
          <div className="fw-bold">Memory:</div>
         { gameData.minimum_system_requirements.memory}
        </div>
       </ListGroup.Item>
       <ListGroup.Item id="card-info-list-item-req">
      <div className="ms-2 me-auto">
          <div className="fw-bold">OS:</div>
         { gameData.minimum_system_requirements.os}
        </div>
         </ListGroup.Item>
         <ListGroup.Item id="card-info-list-item-req">
      <div className="ms-2 me-auto">
          <div className="fw-bold">CPU:</div>
          {gameData.minimum_system_requirements.processor}
        </div>
         </ListGroup.Item>
       <ListGroup.Item id="card-info-list-item-req">
      <div className="ms-2 me-auto">
          <div className="fw-bold">Storage:</div>
          {gameData.minimum_system_requirements.storage}
        </div>
         </ListGroup.Item>
    </ListGroup>
}
          {/* <div className='checkGameLineSep'></div> */}
          {/*//! Game Check Card */}
          {gameData.minimum_system_requirements && 
          <ListGroup variant="flush">
      <ListGroup.Item id="card-info-list-group-req"><h3 className='checkGameTitle'>Check Game</h3></ListGroup.Item>
      <ListGroup.Item id="card-info-list-item-req">
      <div className="ms-2 me-auto">
          <div className="fw-bold"> Enter CPU: </div>
          <label htmlFor='cpu'>
        <input value={checkInputCPU} onChange={(e)=>{setCheckInputCPU(e.target.value)}} type='text' name='cpu' id='cpu' required /></label>
        </div>
        <div className="ms-2 me-auto">
          <div className="fw-bold"> Enter RAM:</div>
          <label htmlFor='ram'>
        <input value={checkInputRAM} onChange={(e)=>{setCheckInputRAM(e.target.value)}} type='text' name='ram' id='ram' required/></label>
        </div>
        <div className="ms-2 me-auto">
          <div className="fw-bold"> Enter GPU: </div>
          <label htmlFor='gpu'>
        <input value={checkInputGPU} onChange={(e)=>{setCheckInputGPU(e.target.value)}} type='text' name='gpu' id='gpu' required/></label>
        </div>
      </ListGroup.Item>
      {/* <ListGroup.Item id="card-info-list-item-req">
    
      </ListGroup.Item>
      <ListGroup.Item id="card-info-list-item-req">
     

      </ListGroup.Item> */}
      <ListGroup.Item id="card-info-list-item-reqBtn">
      <div className="ms-2 me-auto">
          <div className="fw-bold"> <button id={'card-info-officialWeb'} onClick={checkGame}>Check</button></div>
          <ListGroup.Item variant={variant}>
          <h3>{checkMSG}</h3>
          </ListGroup.Item>
        </div>

       
      </ListGroup.Item>
   
    </ListGroup>
        }
      {/* {gameData.minimum_system_requirements && 
      <>
      <div> Check Game</div>
      <form onSubmit={handleCheckSubmit}>

      <label htmlFor='cpu'>Enter CPU:
        <input value={checkInputCPU} onChange={(e)=>{setCheckInputCPU(e.target.value)}} type='text' name='cpu' id='cpu' required /></label>
      <label htmlFor='ram'>Enter RAM:
        <input value={checkInputRAM} onChange={(e)=>{setCheckInputRAM(e.target.value)}} type='text' name='ram' id='ram' required/></label>
      <label htmlFor='gpu'>Enter GPU:
        <input value={checkInputGPU} onChange={(e)=>{setCheckInputGPU(e.target.value)}} type='text' name='gpu' id='gpu' required/></label>
        <button onClick={checkGame}>Check</button>

        <h3>{checkMSG}</h3>
      </form>
      </>
      }  */}
      
    </ul>

      {/* //! game check */}
     
    </div>
  )
}

export default GameInfo