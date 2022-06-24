import React from 'react'
import {AffairType, DefaultAffairsType, FilterType} from './HW2';
import Affair from './Affair';
import s from './Affairs.module.css';
import SuperButton from '../h4/common/c2-SuperButton/SuperButton';

type AlternativeAffairsPropsType = {
  data: DefaultAffairsType
  setFilter: (filter: FilterType) => void
  deleteAffairCallback: (_id: number) => void
  filter: FilterType
}

const AlternativeAffairs: React.FC<AlternativeAffairsPropsType> = ({data, setFilter, deleteAffairCallback, filter}) => {
  const mappedAffairs = data.map((a: AffairType) => (
    <Affair
      key={a._id}
      affair={a}
      deleteAffairCallback={deleteAffairCallback}
    />
  ))

  const getClassName = (filterBtn: FilterType) => {
    return filter === filterBtn ? s.btn__filter_active : s.btn__filter
  }

  return (
    <div className={s.affair__list}>

      {mappedAffairs}

      <div className={s.filters__btn}>
        <SuperButton
          onClick={() => setFilter('all')}
          className={getClassName('all')}
        >
          All
        </SuperButton>
        <SuperButton
          onClick={() => setFilter('high')}
          className={getClassName('high')}
        >
          High
        </SuperButton>
        <SuperButton
          onClick={() => setFilter('middle')}
          className={getClassName('middle')}
        >
          Middle
        </SuperButton>
        <SuperButton
          onClick={() => setFilter('low')}
          className={getClassName('low')}
        >
          Low
        </SuperButton>

      </div>
    </div>
  )
}

export default AlternativeAffairs
