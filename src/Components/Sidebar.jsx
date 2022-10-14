import React from 'react'
import Navbar from './Navbar'
import Search from './Search'
import Chats from './Chats'

const Sidebar = (props) => {
  return (
    <div className='sidebar'>
        <Navbar user={props.user} />
        <Search /> 
        <Chats user={props.user}/>
    </div>
  )
}

export default Sidebar