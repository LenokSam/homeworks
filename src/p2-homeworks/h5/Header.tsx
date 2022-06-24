import React from 'react'
import {NavLink} from 'react-router-dom';
import {PATH} from './Pages';
import s from './Header.module.css'

export type isActiveLinkObject = {
  isActive: boolean
}

function Header() {
  const finalLinkClassName = (isActive: isActiveLinkObject) => {
    return isActive.isActive ? `${s.link} ${s.active}` : s.link
  }

  return (
    <div className={s.wrapper}>
      <NavLink
        className={s.title}
        to={'/'}
      >
        REACT HOMEWORKS
      </NavLink>
      <div className={s.links}>
        <NavLink className={finalLinkClassName}
                 to={PATH.PRE_JUNIOR}
        >
          PRE_JUNIOR
        </NavLink>
        <NavLink
          className={finalLinkClassName}
          to={PATH.JUNIOR}
        >
          JUNIOR
        </NavLink>
        <NavLink
          className={finalLinkClassName}
          to={PATH.JUNIOR_PLUS}
        >
          JUNIOR_PLUS
        </NavLink>
      </div>

    </div>
  )
}

export default Header
