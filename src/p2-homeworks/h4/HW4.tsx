import React, {ChangeEvent, useState} from 'react'
import SuperInputText from './common/c1-SuperInputText/SuperInputText'
import s from './HW4.module.css'
import SuperButton from './common/c2-SuperButton/SuperButton'
import SuperCheckbox from './common/c3-SuperCheckbox/SuperCheckbox'

function HW4() {
  const [text, setText] = useState<string>('')
  const error = text ? '' : 'error'

  const showAlert = () => {
    if (error) {
      alert('введите текст...')
    } else {
      alert(text) // если нет ошибки показать текст
    }
  }

  const [checked, setChecked] = useState<boolean>(false)
  const testOnChange = (e: ChangeEvent<HTMLInputElement>) => setChecked(e.currentTarget.checked)

  return (
    <div>
      <hr/>
      <div className={'title__hw'}><span>HOMEWORK 4</span></div>

      <div className={s.column}>
        <SuperInputText
          value={text}
          onChangeText={setText}
          onEnter={showAlert}
          error={error}
          // spanClassName={s.testSpanError}
        />

        <SuperInputText
          className={s.shadow} // проверьте, рабоет ли смешивание классов
        />

        {/*----------------------------------------------------*/}

        <SuperButton>
          DEFAULT
        </SuperButton>

        <SuperButton
          red // пропсу с булевым значением не обязательно указывать true
          onClick={showAlert}
        >
          DELETE {/*// название кнопки попадёт в children*/}
        </SuperButton>

        <SuperButton disabled>
          DISABLED
        </SuperButton>


        <SuperCheckbox
          checked={checked}
          onChangeChecked={setChecked}
        >
          some text {/*// этот текст попадёт в children*/}
        </SuperCheckbox>

        <SuperCheckbox checked={checked} onChange={testOnChange}/>
      </div>

      <hr/>
      {/*для личного творчества, могу проверить*/}
      {/*<AlternativeSuperInputText/>*/}
      {/*<AlternativeSuperButton/>*/}
      {/*<AlternativeSuperCheckbox/>*/}
      <hr/>
    </div>
  )
}

export default HW4
