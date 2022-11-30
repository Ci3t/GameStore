import React, { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import './friendlist.css'
function FriendList({showFriends}) {
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
    <>
    {showFriends && 
    <div className="friendlist-container-BG">

    <div className='friendlist-fixed-Position'>
      <label htmlFor="search-friend">
        <input value={searchFriendInput} onChange={(e)=>{setSearchFriendInput(e.target.value)}} type="text" id='search-friend' name="search-friend" placeholder="Search friend &#128269;"/>
       
      </label>
      <ul>
      <li><button onClick={()=>{
        setIsShown(prev=>!prev)
        addFriends()
      }}> <i class="fas fa-plus"></i> Add Friend</button></li>
        {isShown &&  <li><input type={'text'} id={'friendlist-AddFInput'} value={addFriendInput} onChange={(e)=>{setAddFriendInput(e.target.value)}} /></li>}
        {friends.filter(friend=>{
          
          return searchFriendInput.toLowerCase() === '' ? friend : friend.name.toLowerCase().includes(searchFriendInput)
        })
        .map(friend=> {
          return (
            <React.Fragment  key={friend.id}>
              <li><button onClick={()=>{
                deleteFriends(friend.id)
              }}>X</button></li>
              <div className='friendlist-name-imgCont'>

            <li ><img className='friendList-Img' src={friend.avatar} /></li>
            <li > {friend.name}</li>
              </div>
            </React.Fragment>
          )
        })}
        
       
      
      </ul>
    </div>
        </div>
        }
        </>
  )
}

export default FriendList