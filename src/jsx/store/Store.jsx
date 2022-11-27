import React, { useEffect, useState } from 'react'
import GameList from './GameList'
import StoreImageSlider from './StoreImageSlider'
import {apiFetch} from "../../contexts/apiFetch";





function Store() {
  const [gamesList, setGamesList] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  useEffect(()=>{
    setIsLoading(true)
    const getGame = async ()=>{
        
      const {data} = await apiFetch('https://free-to-play-games-database.p.rapidapi.com/api/games')
      
      setGamesList(data)
      setIsLoading(false)
    }
    getGame()
  },[])

  return (
    <div>
      <StoreImageSlider gamesList={gamesList} />
      <GameList gamesList={gamesList}/>
      
    </div>
  )
}

export default Store