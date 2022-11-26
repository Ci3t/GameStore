import React, { useState } from 'react'
import {apiFetch} from "../../contexts/apiFetch";
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import Pagination from './Pagination'
import GameInfo from './GameInfo';

function GameList() {
const [gamesList, setGamesList] = useState([])
const [isLoading, setIsLoading] = useState(false)
const [currentGamePage, setCurrentGamePage] = useState(1)
const [gamePerPage, setGamePerPage] = useState(10)

    useEffect(()=>{
        setIsLoading(true)
        const getGame = async ()=>{
            
          const {data} = await apiFetch('https://free-to-play-games-database.p.rapidapi.com/api/games')
          
          setGamesList(data)
          setIsLoading(false)
        }
        getGame()
      },[])

      //Current game

      const indexOfLastGame = currentGamePage * gamePerPage
      const indexOfFirstGame = indexOfLastGame - gamePerPage
      const currentGames = gamesList.slice(indexOfFirstGame,indexOfLastGame)

      //Change page
      const paginate = (pageNumber)=>{
        setCurrentGamePage(pageNumber)
      }
    
  return (
    <div>
        {isLoading && <h1>Loading....</h1>}
        {!isLoading && currentGames.map(game =>{
            return (
                <>
                
                <ul key={game.id}>
                    <li>{game.title}</li>
                    <li>{game.short_description}</li>
                    <li>{game.game_url}</li>
                    <li>{game.platform}</li>
                    <li>{game.publisher}</li>
                    <li>{game.thumbnail}</li>
                    <li>{game.release_date}</li>
                    <li>{game.genre}</li>
                    <Link  to={`/store/${game.id}`} style={{ margin: '1rem' }}>

                        More Info
                        </Link>
                </ul>
                </>
            )
        })}
        <Pagination gamePerPage={gamePerPage} totalGames={gamesList.length} paginate={paginate} />
    </div>
  )
}

export default GameList