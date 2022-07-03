import React, {ChangeEvent, InputHTMLAttributes, DetailedHTMLProps} from 'react'
import s from './SuperRadio.module.css'

type DefaultRadioPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type SuperRadioPropsType = DefaultRadioPropsType & {
  options?: any[]
  onChangeOption?: (option: any) => void
}

const SuperRadio: React.FC<SuperRadioPropsType> = (
  {
    type, name,
    options, value,
    onChange, onChangeOption,
    ...restProps
  }
) => {
  const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
    onChangeOption && onChangeOption(e.currentTarget.value)
    onChange && onChange(e)
  }


  const mappedOptions: any[] = options ? options.map((o, i) => (
    <label key={name + '-' + i} className={s.checkbox}>
      <input
        type={'radio'}
        onChange={onChangeCallback}
        value={o}
        checked={value === o}
        className={s.radio}

      />
      <span className={s.checkbox__text}>{o}</span>
    </label>

  )) : []

  return (
    <div className={s.radio_buttons}>
      {mappedOptions}
    </div>
  )
}

export default SuperRadio
