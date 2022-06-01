import React from 'react'
import Affair from './Affair'
import {AffairType, DefaultAffairsType, FilterType} from './HW2'
import s from './Affairs.module.css'

type AffairsPropsType = {
  data: DefaultAffairsType
  setFilter: (filter: FilterType) => void
  deleteAffairCallback: (_id: number) => void
}

function Affairs(props: AffairsPropsType) {
  const {data, setFilter, deleteAffairCallback} = props
  const mappedAffairs = data.map((a: AffairType) => (
    <Affair
      key={a._id}
      affair={a}
      deleteAffairCallback={deleteAffairCallback}
    />
  ))

  const setAll = () => {
    setFilter('all')
  } // need to fix
  const setHigh = () => {
    setFilter('high')

  }
  const setMiddle = () => {
    setFilter('middle')

  }
  const setLow = () => {
    setFilter('low')

  }

  return (
    <div className={s.affair__list}>

      {mappedAffairs}

      <div className={s.filters}>
        <button className={s.btn__filter} onClick={setAll}>All</button>
        <button className={s.btn__filter} onClick={setHigh}>High</button>
        <button className={s.btn__filter} onClick={setMiddle}>Middle</button>
        <button className={s.btn__filter} onClick={setLow}>Low</button>
      </div>
    </div>
  )
}

export default Affairs
