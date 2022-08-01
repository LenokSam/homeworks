import React from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {useDispatch, useSelector} from 'react-redux';
import {AppStoreType} from './bll/store';
import {loadingAC} from './bll/loadingReducer';
import spinner from '../h10/bll/Spinner.gif'

function HW10() {
  const dispatch = useDispatch()
  const loading = useSelector<AppStoreType, boolean>(state => state.loading.loading)

  const setLoading = () => {
    dispatch(loadingAC(true))
    setTimeout(() => dispatch(loadingAC(false)), 2000)
    console.log('loading...')
  };

  return (
    <div>
      <div className={'title__hw'}><span>HOMEWORK 10</span></div>
      {loading
        ? (
          <div><img src={spinner} alt=""/></div>
        ) : (
          <div>
            <SuperButton onClick={setLoading}>set loading...</SuperButton>
          </div>
        )
      }


    </div>
  )
}

export default HW10
