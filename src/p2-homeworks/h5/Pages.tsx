import React from 'react'
import {Link, Navigate, NavLink, Route, Routes} from 'react-router-dom';
import PreJunior from './pages/PreJunior';
import Error404 from './pages/Error404';
import JuniorPlus from './pages/JuniorPlus';
import Junior from './pages/Junior';
import s from './Header.module.css';

export const PATH = {
  PRE_JUNIOR: '/pre-junior',
  JUNIOR: '/junior',
  JUNIOR_PLUS: '/junior-plus',
}


function Pages() {
  return (
    <div>

      <Routes>

        <Route path={'/'} element={<Navigate to={PATH.PRE_JUNIOR}/>}/>


        <Route path={PATH.PRE_JUNIOR} element={<PreJunior/>}/>
        <Route path={PATH.JUNIOR} element={<Junior/>}/>
        <Route path={PATH.JUNIOR_PLUS} element={<JuniorPlus/>}/>

        <Route path={'/*'} element={<Error404/>}/>

      </Routes>
    </div>
  )
}

export default Pages

