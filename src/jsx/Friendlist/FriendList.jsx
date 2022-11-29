import React, { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import './friendlist.css'
function FriendList() {
const [friends,setFriends] = useState([])
const [addFriendInput, setAddFriendInput] = useState('')
const [searchFriendInput, setSearchFriendInput] = useState('')
const [isShown, setIsShown] = useState(false)

  useEffect(()=>{
    const getFriends = async ()=>{

      const {data} = await axios.get(`https://63738f8d0bb6b698b60f9519.mockapi.io/gamestore`)
      
      setFriends(data)
    } 
    getFriends()
  },[])

    
  const addFriends = async ()=>{

    if(addFriendInput !== ''){
      
      const {data} = await axios.post(`https://63738f8d0bb6b698b60f9519.mockapi.io/gamestore`,{
        name:addFriendInput
      })
  
      setFriends([...friends,data])
    }else{
      return
    }
    
  }
  const deleteFriends = async (id)=>{

    await axios.delete(`https://63738f8d0bb6b698b60f9519.mockapi.io/gamestore/${id}`)

    setFriends(
      friends.filter((friend )=>{ return friend.id!== id})
    )
  }

  
  

  return (
    <div className="friendlist-container-BG">

    <div className='friendlist-fixed-Position'>
      <label htmlFor="search-friend">
        <input value={searchFriendInput} onChange={(e)=>{setSearchFriendInput(e.target.value)}} type="text" id='search-friend' name="search-friend" placeholder="Search friend"/>
       
      </label>
      <ul>
        {friends.filter(friend=>{
          
          return searchFriendInput.toLowerCase() === '' ? friend : friend.name.toLowerCase().includes(searchFriendInput)
        })
        .map(friend=> {
          return (
            <React.Fragment  key={friend.id}>
            <li >{friend.name}</li>
            <li ><img className='friendList-Img' src={friend.avatar} /></li>
            <li><button onClick={()=>{
              deleteFriends(friend.id)
            }}>X</button></li>
            </React.Fragment>
          )
        })}
        {isShown &&  <li><input type={'text'} value={addFriendInput} onChange={(e)=>{setAddFriendInput(e.target.value)}} /></li>}
       
        <li><button onClick={()=>{
          setIsShown(prev=>!prev)
          addFriends()
        }}>Add Friend</button></li>
      </ul>
    </div>
        </div>
  )
}

export default FriendList