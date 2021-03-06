import React, {SelectHTMLAttributes, DetailedHTMLProps, ChangeEvent} from 'react'
import s from './SuperSelect.module.css'

type DefaultSelectPropsType = DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>

type SuperSelectPropsType = DefaultSelectPropsType & {
  options?: any[]
  onChangeOption?: (option: string) => void
}

const SuperSelect: React.FC<SuperSelectPropsType> = (
  {
    options,
    onChange, onChangeOption,
    ...restProps
  }
) => {
  const mappedOptions: any[] = options ? options.map((el, i) => {
    return (
      <option value={el} key={i} className={s.option}>{el} </option>
    )
  }) : []

  const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>) => {
    onChangeOption && onChangeOption(e.currentTarget.value)
  }

  return (
    <select onChange={onChangeCallback} {...restProps} className={s.select}>
      {mappedOptions}
    </select>
  )
}

export default SuperSelect
