import React from 'react'
import {AffairType} from './HW2';
import s from './Affairs.module.css'
import {MdHighlightOff} from 'react-icons/md'

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

      <button onClick={deleteCallback} className={s.button__delete}>
        <MdHighlightOff size={'30px'}/>
      </button>
    </div>
  )
}

export default Affair
