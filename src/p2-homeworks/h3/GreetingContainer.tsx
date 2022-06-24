import React, {ChangeEvent, useState} from 'react'
import Greeting from './Greeting'
import {UserType} from './HW3';

type GreetingContainerPropsType = {
  users: Array<UserType>
  addUserCallback: (name: string) => void
}


const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => {
  const [name, setName] = useState<string>('')
  const [error, setError] = useState<string>('')

  const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value)
    setError('')
  }


  const addUser = () => {
    let nameToSet = name.trim()
    if (nameToSet) {
      alert(`Hello ${name} ! `)
      addUserCallback(name.trim())
      setName('')
      setError('')
    } else setError('Enter your name')

  }

  const totalUsers = users.length

  return (
    <Greeting
      name={name}
      setNameCallback={setNameCallback}
      addUser={addUser}
      error={error}
      totalUsers={totalUsers}
    />
  )
}

export default GreetingContainer
