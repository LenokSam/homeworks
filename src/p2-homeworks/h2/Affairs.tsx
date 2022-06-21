import React from 'react'
import Affair from './Affair'
import {AffairType, DefaultAffairsType, FilterType} from './HW2'
import s from './Affairs.module.css'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton';

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

  return (
    <div className={s.affair__list}>

      {mappedAffairs}

      <div className={s.filters}>
        <SuperButton
          onClick={() => setFilter('all')}
          className={s.btn__filter}
        >
          All
        </SuperButton>
        <SuperButton
          onClick={() => setFilter('high')}
          className={s.btn__filter}
        >
          High
        </SuperButton>
        <SuperButton
          onClick={() => setFilter('middle')}
          className={s.btn__filter}
        >
          Middle
        </SuperButton>
        <SuperButton
          onClick={() => setFilter('low')}
          className={s.btn__filter}
        >
          Low
        </SuperButton>

      </div>
    </div>
  )
}

export default Affairs
