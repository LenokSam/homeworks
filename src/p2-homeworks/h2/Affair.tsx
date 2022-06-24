import React from 'react'
import {AffairType} from './HW2';
import s from './Affairs.module.css'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton';
import Delete from './Delete';
import deleteImmg from './delete.png'

type AffairPropsType = {

  affair: AffairType
  deleteAffairCallback: (_id: number) => void
}

function Affair(props: AffairPropsType) {
  const {_id, name, priority} = props.affair

  const deleteCallback = () => {
    props.deleteAffairCallback(_id)
  }

  return (
    <div className={s.affair}>
      <div className={s.affair__wrapper}>
        <span className={s.name}> {name}</span>
        <div className={'row'}>
          <span className={s.circle}></span>
          <span className={s.priority}> {priority}</span>
        </div>
      </div>
      <SuperButton
        onClick={deleteCallback}
        className={s.button__delete}
      >
        <img src={deleteImmg} style={{width: '20px'}}/>
      </SuperButton>

    </div>
  )
}

export default Affair
