import React from 'react'
import Messages from './Messages'
import Input from './Input'

const Chat = (props) => {
  return (
    <div className='chat'>
      <div className="chatInfo">
        <span>{props.sender}</span>
      </div>
      <Messages />
      <Input />
    </div>
  )
}

export default Chat