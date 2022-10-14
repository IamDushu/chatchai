import React from 'react'
import { Link, useNavigate } from "react-router-dom"
import {useState} from 'react'
import { useContext } from 'react'
import UserContext from "../UserContext"

import {useQuery, gql} from '@apollo/client'
import {LOGIN_USER} from '../GraphQL/Queries'


export default function Login(){
 
 const {changeUser} = useContext(UserContext)

 const [userId, setUserId] = useState("")
 const [password, setPassword] = useState("")
 const { loading, error, data } = useQuery(LOGIN_USER, {
  variables: {
    senderId: userId,
    appId: "luvhut",
    password: password
   },
 })

 const navigate = useNavigate()

 function login(e){
  e.preventDefault()
  if (error){
    return alert("Wrong Credentials")
  } 
  changeUser(userId)
  navigate("/app")
 }
 
 
  return (
    <div className="formContainer">
        <div className='formWrapper'>
            <span className='logo'>Chat App</span>
            <span className='title'>Login</span>
            <form action="/app" >
                <input type="text" placeholder="Phone no." onChange={(e)=>{
                  setUserId(e.target.value)}} />
                <input type="password" placeholder='password' onChange={(e)=>{
                  setPassword(e.target.value)}} />
                <button onClick={login}>Sign in</button>
            </form>
            <p>Don't have an account? <Link to='/register'>Register</Link></p>
        </div>
    </div>
  )
}


 
// function DogPhoto({ breed }) {
//   const { loading, error, data } = useQuery(GET_DOG_PHOTO, {
//     variables: { breed },
//   });

//   if (loading) return null;
//   if (error) return `Error! ${error}`;

//   return (
//     <img src={data.dog.displayImage} style={{ height: 100, width: 100 }} />
//   );
// }