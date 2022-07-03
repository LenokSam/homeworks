import React, {useEffect, useState} from 'react'
import SuperEditableSpan from './common/c4-SuperEditableSpan/SuperEditableSpan'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {restoreState, saveState} from './localStorage/localStorage'

function HW6() {
  const [value, setValue] = useState<string>('')


  //по клику сохрнаяю в lst.
  const save = () => {
    saveState<string>('editable-span-value', value)
  }

  // по клику послек обновления могу достать из lSt.Если не нажать save, то оно не улетит в lSt
  const restore = () => {
    setValue(restoreState<string>('editable-span-value', ''))
  }


  return (
    <div>
      <hr/>
      <div className={'title__hw'}><span>HOMEWORK 6</span></div>

      <div style={{margin: '5px'}}>
        <SuperEditableSpan
          value={value}
          //меняет локальную переменную, но не меняет state
          //если хочу на onChange, то через UseEffect
          onChangeText={setValue}
          // если value пустой, то как бы placeholder(children)
          spanProps={{children: value ? undefined : 'Enter text...'}}
        />
      </div>
      <SuperButton onClick={save}>save</SuperButton>
      <SuperButton onClick={restore}>restore</SuperButton>
      <hr/>
      {/*для личного творчества, могу проверить*/}
      {/*<AlternativeSuperEditableSpan/>*/}
      <hr/>
    </div>
  )
}

export default HW6
