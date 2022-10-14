import React from 'react'
import Sidebar from '../Components/Sidebar'
import Chat from '../Components/Chat'
import UserContext from "../UserContext"
import { useContext } from 'react'

const Home = () => {

 const {userValue} = useContext(UserContext)

  return (
      <div className='home'>
        <div className="container">
            <Sidebar user={userValue} /> 
            <Chat />
        </div>
      </div>

  )
}

export default Home