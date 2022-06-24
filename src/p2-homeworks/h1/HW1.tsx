import React from 'react'
import Message, {MessageType} from './Message';


let spreadElements = {
  avatar: 'https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg',
  name: 'Some Name',
  message: 'some text ',
  time: '22:00'
};
const messageData: MessageType
  = {
  ...spreadElements,
}


function HW1() {
  return (
    <div>
      <hr/>
      <div className={'title__hw'}><span>HOMEWORK 1</span></div>

      <Message
        avatar={messageData.avatar}
        name={messageData.name}
        message={messageData.message}
        time={messageData.time}
      />

      <hr/>
      {/*для личного творчества, могу проверить*/}
      {/*<AlternativeMessage/>*/}
      <hr/>
    </div>
  )
}

export default HW1
