import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'

export function apiFetch(url) {
   

    return axios.get(url,{
        headers: {
            'X-RapidAPI-Key': 'd121f27469msh45f35ef23203971p1324a3jsnd99ee818408f',
            'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
          }
    })
   


}
export function getGameById(url,gameId) {
   

    return axios.get(url,{
       
        params: {id: gameId},
        headers: {
            'X-RapidAPI-Key': 'd121f27469msh45f35ef23203971p1324a3jsnd99ee818408f',
            'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
          }
    })
   


}
