import React from 'react'
import s from './Message.module.css'


export type MessageType = {
  avatar: string
  name: string
  message: string
  time: string
}

function Message(props: MessageType) {
  const {avatar, name, message, time} = props
  return (
    <div className={s.message}>
      <img alt="avatar" src={avatar} className={s.avatar}></img>
      <div className={s.bubble}>
        <div className={s.text}>
          <h2 className={s.text__name}>{name}</h2>
          <p className={s.text__message}>{message}</p>
        </div>
        <span className={s.text__time}>{time}</span>
      </div>
    </div>
  )
}

export default Message
