import React, { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'
function FriendList() {
const [friends,setFriends] = useState([])

  useEffect(()=>{
    const getFriends = async ()=>{

      const {data} = await axios.get(`https://63738f8d0bb6b698b60f9519.mockapi.io/gamestore`)
      
      setFriends(data)
    } 
    getFriends()
  },[])

  const deleteFriends = async (id)=>{

    await axios.delete(`https://63738f8d0bb6b698b60f9519.mockapi.io/gamestore/${id}`)

    setFriends(
      friends.filter((friend )=>{ return friend.id!== id})
    )
  }

  return (
    <div>
      <ul>
        {friends.map(friend=> {
          return (
            <React.Fragment  key={friend.id}>
            <li >{friend.name}</li>
            <li ><img src={friend.avatar} /></li>
            <li><button onClick={()=>{
              deleteFriends(friend.id)
            }}>X</button></li>
            </React.Fragment>
          )
        })}
      </ul>
    </div>
  )
}

export default FriendList