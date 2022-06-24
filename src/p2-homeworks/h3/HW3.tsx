import React, {useState} from 'react'
import GreetingContainer from './GreetingContainer'
import {v1} from 'uuid';

// types
export type UserType = {
  _id: string
  name: string
}

// уровень работы с глобальными данными
function HW3() {
  const [users, setUsers] = useState<Array<UserType>>([])
  const addUserCallback = (name: string) => {
    setUsers([...users, {_id: v1(), name: name}]) // need to fix
  }

  return (
    <div>
      <hr/>
      <div className={'title__hw'}><span>HOMEWORK 3</span></div>

      {/*should work (должно работать)*/}
      <GreetingContainer users={users} addUserCallback={addUserCallback}/>

      <hr/>
      {/*для личного творчества, могу проверить*/}
      {/*<AlternativeGreeting/>*/}
      <hr/>
    </div>
  )
}

export default HW3
