import React from 'react'
import {AffairType} from './HW2';
import s from './Affairs.module.css'
import {MdHighlightOff} from 'react-icons/md'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton';

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
      <span className={s.name}> {name}</span>
      <span className={s.priority}> {priority}</span>

      <SuperButton
        onClick={deleteCallback}
        className={s.button__delete}
      >
        <MdHighlightOff size={'30px'}/>
      </SuperButton>

    </div>
  )
}

export default Affair
