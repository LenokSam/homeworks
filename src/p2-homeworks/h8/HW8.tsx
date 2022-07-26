import React, {useState} from 'react'
import {checkAC, homeWorkReducer, sortUpAC} from './bll/homeWorkReducer'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'

import s from '../h2/Affairs.module.css';

export type UserType = {
  _id: number
  name: string
  age: number
}

const initialPeople: Array<UserType> = [
  {_id: 0, name: 'Мирослав', age: 3},
  {_id: 1, name: 'Александр', age: 66},
  {_id: 2, name: 'Коля', age: 16},
  {_id: 3, name: 'Виктор', age: 44},
  {_id: 4, name: 'Дмитрий', age: 40},
  {_id: 5, name: 'Ирина', age: 55},
]

function HW8() {
  const [people, setPeople] = useState<Array<UserType>>(initialPeople) // need to fix any

  // need to fix any
  const finalPeople = people.map((p: UserType) => (
    <div className={s.affair} key={p._id}>
      <div className={s.affair__wrapper}>
        <span className={s.name}> {p.name}</span>
        <div className={s.priority__wrapper}>
          <span className={s.circle}></span>
          <span className={s.priority}> {p.age}</span>
        </div>
      </div>
    </div>
  ))

  const sortUp = () => setPeople(homeWorkReducer(initialPeople, sortUpAC('up')))
  const sortDown = () => setPeople(homeWorkReducer(initialPeople, sortUpAC('down')))
  const check18 = () => setPeople(homeWorkReducer(initialPeople, checkAC(18)))

  return (
    <div>
      <hr/>
      <div className={'title__hw'}><span>HOMEWORK 8</span></div>

      {/*should work (должно работать)*/}
      {finalPeople}
      <div className={'row'}>
        <div><SuperButton
          onClick={sortUp}
        >SORT UP</SuperButton></div>
        <div><SuperButton
          onClick={sortDown}
        >SORT DOWN
        </SuperButton></div>
        <div><SuperButton onClick={check18}>CHECK 18</SuperButton>
        </div>
      </div>

      <hr/>
      {/*для личного творчества, могу проверить*/}
      {/*<AlternativePeople/>*/}
    </div>
  )
}

export default HW8
