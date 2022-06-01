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
      `

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
