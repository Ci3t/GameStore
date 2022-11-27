import axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import {getGameById} from "../../contexts/apiFetch";

function GameInfo() {


  const { id } = useParams();
  const [gameData,setGameData]=useState({})
  const [checkInputRAM,setCheckInputRAM]=useState('')
  const [checkInputCPU,setCheckInputCPU]=useState('')
  const [checkInputGPU,setCheckInputGPU]=useState('')
  const [isLoading,setIsLoading]=useState(false)
  const [checkMSG,setCheckMSG]=useState('')
  
  
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

      if(gameData.minimum_system_requirements.memory !== null){
        
        const memory = Object.values(gameData.minimum_system_requirements.memory).slice(0,2).join('')
        console.log(+Object.values(gameData.minimum_system_requirements.memory).slice(0,3).join(''));
        
        if(checkInputRAM < +memory ){
          
          setCheckMSG('You Can Run it On : "LOW" Difficulty')
        }
        else if (checkInputRAM == +memory ){
          
          setCheckMSG('You Can Run it On : "MEDIUM" Difficulty')
        }
        else{
          
          setCheckMSG('You Can Run it On : "HIGH OR ULTRA" Difficulty')
          
        }
        
      }else{
        if(checkInputRAM < 8){
          setCheckMSG('You Can Run it On : "LOW" Difficulty')
        }
      else if(checkInputRAM == 8){
        setCheckMSG('You Can Run it On : "MEDIUM" Difficulty')
      }
      else{
        setCheckMSG('You Can Run it On : "HIGH OR ULTRA" Difficulty')
      }
    }
    
  }
    }else{
      setCheckMSG('Please fill all inputs')
    }
  }
  
  return (
    <>
    <ul>
      <li>{gameData.title}</li>
      <li>{gameData.description}</li>
      <li>{gameData.platform}</li>
      <li>{gameData.publisher}</li>
      <li>{gameData.release_date
}</li>

      <li>{gameData.screenshots && gameData.screenshots.map(img=>{
        return (
          <img width={'200px'} src={img.image} alt={'screenshot"Missing"'} />
        )
      })}</li>
      <li>
      <img width={'200px'} src={gameData.thumbnail} alt={'thumbnail'} /></li>
      <li>{gameData.status}</li>
      <li>{gameData.developer}</li>
      <li><h2>Requirements</h2></li>
      <li>{gameData.minimum_system_requirements && gameData.minimum_system_requirements.graphics}</li>
      <li>{gameData.minimum_system_requirements && gameData.minimum_system_requirements.memory}</li>
      <li>{gameData.minimum_system_requirements && gameData.minimum_system_requirements.os}</li>
      <li>{gameData.minimum_system_requirements && gameData.minimum_system_requirements.processor}</li>
      <li>{gameData.minimum_system_requirements && gameData.minimum_system_requirements.storage}</li>
      
    </ul>

      {/* //! game check */}
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
  )
}

export default GameInfo