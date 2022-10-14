import React,{useState} from 'react'
import { Link } from "react-router-dom"
 
import {CREATE_USER_MUTATION} from '../GraphQL/Mutations'
import {useMutation} from '@apollo/client'

function Register(){

  const[userId, setUserId] = useState("")
  const[appId, setAppId] = useState("")

  const [register, {error}] = useMutation(CREATE_USER_MUTATION)



  const addUser = async (e)=>{
    try{
      e.preventDefault()
      await register({
        variables:{
          senderId: userId,
          appId: appId
        }
      })
      alert(`User: ${userId} added succesfully!`)
    }catch(error){
      alert("BAD INPUT!")
    }
  }

  return (
    <div className="formContainer">
        <div className='formWrapper'>
            <span className='logo'>Chat App</span>
            <span className='title'>Register</span>
            <form>
                <input type="text" placeholder="Phone no." onChange={(e)=>{
                  setUserId(e.target.value)}} />
                <input type="text" placeholder="App ID" onChange={(e)=>{
                  setAppId(e.target.value)}} />
                <button onClick={addUser}>Sign up</button>
            </form>
            <p>Do you have an account? <Link to='/'>Login</Link></p>
        </div>
    </div>
  )

}


export default Register