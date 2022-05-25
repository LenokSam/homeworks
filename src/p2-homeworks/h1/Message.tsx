import React from 'react'
import {MessageType} from "./HW1";
import './Message.css'

function Message(props: MessageType) {
  const {avatar, name, message, time} = props
  return (
    <div className='message'>
      <img alt='avatar' src={avatar} className='message__avatar'></img>
      <div className='message__bubble'>
        <div className={'message__text'}>
          <h2 className={'message-text__name'}>{name}</h2>
          <p className={'message-text__message'}>{message}</p>
        </div>
        <span className={'message-text__time'}>{time}</span>
      </div>
    </div>
  )
}

export default Message
