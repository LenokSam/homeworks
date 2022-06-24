import React, {ChangeEvent} from 'react'
import s from './Greeting.module.css'

import {TbUsers} from 'react-icons/tb'
import SuperInputText from '../h4/common/c1-SuperInputText/SuperInputText';
import SuperButton from '../h4/common/c2-SuperButton/SuperButton';

type GreetingPropsType = {
  name: string
  setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void
  addUser: () => void
  error: string
  totalUsers: number
}

const Greeting: React.FC<GreetingPropsType> = (
  {name, setNameCallback, addUser, error, totalUsers}
) => {
  const inputClass = error ? `${s.input__error}  ${s.input}` : s.input
  const titleClass = error ? `${s.title__error}  ${s.form__title}` : s.form__title
  return (
    <div className={s.formWrapper}>

      <SuperInputText
        className={s.input}
        value={name}
        onChange={setNameCallback}
        error={error}
      />

      <div>
        <SuperButton
          onClick={addUser}
          className={s.btn__add}
        >
          Add
        </SuperButton>
        <div className={s.totalUsers}><TbUsers/>{totalUsers}</div>
      </div>

    </div>
  )
}

export default Greeting
