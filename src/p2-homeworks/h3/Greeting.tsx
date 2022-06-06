import React, {ChangeEvent} from 'react'
import s from './Greeting.module.css'

import {TbUsers} from 'react-icons/tb'

type GreetingPropsType = {
  name: string
  setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void
  addUser: () => void
  error: string
  totalUsers: number
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
  {name, setNameCallback, addUser, error, totalUsers} // деструктуризация пропсов
) => {
  const inputClass = error ? `${s.input__error}  ${s.input}` : s.input // need to fix with (?:)
  const titleClass = error ? `${s.title__error}  ${s.form__title}` : s.form__title
  return (
    <div className={s.formWrapper}>
      <h3 className={titleClass}>Enter your name</h3>
      <input
        value={name}
        onChange={setNameCallback}
        className={inputClass}
        placeholder={'Enter your name'}
      />
      <div>
        <button onClick={addUser} className={s.btn}>Add</button>
        <div className={s.totalUsers}><TbUsers/>{totalUsers}</div>
      </div>

    </div>
  )
}

export default Greeting
