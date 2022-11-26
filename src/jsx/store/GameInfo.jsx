import axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import {getGameById} from "../../contexts/apiFetch";
function GameInfo() {


  const { id } = useParams();
  const [gameData,setGameData]=useState({})
  const [ssLoading,setIsLoading]=useState(false)
  
  
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


  return (
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
  )
}

export default GameInfo