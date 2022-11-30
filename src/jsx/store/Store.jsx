import React, { useEffect, useState } from 'react'
import GameList from './GameList'
import StoreImageSlider from './StoreImageSlider'
import {apiFetch} from "../../contexts/apiFetch";
import './store.css'






function Store() {
  const [gamesList, setGamesList] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [errorStore, setErrorStore] = useState('')
  useEffect(()=>{
    setIsLoading(true)
    const getGame = async ()=>{
      setErrorStore('')
        try{

          const {data} = await apiFetch('https://free-to-play-games-database.p.rapidapi.com/api/games')
          
          setGamesList(data)
          setIsLoading(false)
        }catch(e){
          setErrorStore(e)
        }
    }
    getGame()
  },[])

  return (
    <div >

    <div className='storeBGAll'>
      <div className='gamelistFullCont'></div>
   
      <StoreImageSlider gamesList={gamesList} />
      <h4 className='ErrorMessageStore'>{errorStore?.message}</h4>
      {/* //!TODO SPINNER */}
      {isLoading && <span class="loader"></span>}
      <GameList gamesList={gamesList}/>
      
    </div>
    </div>
  )
}

export default Store