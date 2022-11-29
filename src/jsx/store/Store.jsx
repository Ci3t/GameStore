import React, { useEffect, useState } from 'react'
import GameList from './GameList'
import StoreImageSlider from './StoreImageSlider'
import {apiFetch} from "../../contexts/apiFetch";
import './store.css'
import FriendList from '../Friendlist/FriendList';





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
    <div >
    {/* <FriendList/>  */}
    <div className='storeBGAll'>
      <div className='gamelistFullCont'></div>
      {/* <div className='overlay2'></div> */}
      <StoreImageSlider gamesList={gamesList} />
      <GameList gamesList={gamesList}/>
      
    </div>
    </div>
  )
}

export default Store