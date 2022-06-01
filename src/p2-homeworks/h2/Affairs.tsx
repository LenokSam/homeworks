import React from 'react'
import Affair from './Affair'
import {AffairType, DefaultAffairsType, FilterType} from './HW2'

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
    <div>

      {mappedAffairs}

      <button onClick={setAll}>All</button>
      <button onClick={setHigh}>High</button>
      <button onClick={setMiddle}>Middle</button>
      <button onClick={setLow}>Low</button>
    </div>
  )
}

export default Affairs
