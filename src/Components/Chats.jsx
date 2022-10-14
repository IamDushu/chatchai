import React, {useEffect, useState} from 'react'
import {useQuery, gql} from '@apollo/client'
import {LOAD_USERS} from '../GraphQL/Queries'
import UserContext from '../UserContext'
import { useContext } from 'react'

const Chats = (props) => {

  const userValue = useContext(UserContext)

 const {error, loading, data} = useQuery(LOAD_USERS)
 const [users,setUsers] = useState([])

 useEffect(()=>{
   if(data){
    setUsers(data.getUsers)
   }
 }, [data])
 
 console.log(users)

  return (
    <>
        <div className='chats'>
        {users.map((user)=>{
      return(
        <div className="userChat">
          <img src="https://st3.depositphotos.com/4111759/13425/v/1600/depositphotos_134255588-stock-illustration-empty-photo-of-male-profile.jpg" alt=''></img>
          <div className="userChatInfo">
            <span>{user._id}</span>
            {/* <p>Hello</p> */}
          </div>
        </div>
      )
      })}
          </div>
    </>
  )
}

export default Chats