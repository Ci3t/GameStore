import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'

export function apiFetch(url) {
   

    return axios.get(url,{
        headers: {
            'X-RapidAPI-Key': process.env.REACT_APP_X_RapidAPI_Key,
            'X-RapidAPI-Host': process.env.REACT_APP_X_RapidAPI_Host
          }
    })
   


}
export function getGameById(url,gameId) {
   

    return axios.get(url,{
       
        params: {id: gameId},
        headers: {
            'X-RapidAPI-Key': process.env.REACT_APP_X_RapidAPI_Key,
            'X-RapidAPI-Host': process.env.REACT_APP_X_RapidAPI_Host
          }
    })
   


}
