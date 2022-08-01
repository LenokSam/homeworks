import React, {useState} from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange'
import SuperDoubleRange from './common/c8-SuperDoubleRange/SuperDoubleRange'
import sDouble from './common/c8-SuperDoubleRange/SuperDoubleRange.module.css'
import AlternativeSuperRange from './common/c7-SuperRange/AlternativeSuperRange';

function HW11() {
  const [value1, setValue1] = useState<number>(10)
  const [value2, setValue2] = useState<number>(100)

  const changeDoubleRange = (values: [number, number]) => {
    setValue1(values[0])
    setValue2(values[1])
  }

  // const [value, setValue] = React.useState<number[]>([0, 100]);

  const handleChange = (newValue: number | number[]) => {
    let valueForSet = newValue as number[]
    setValue1(valueForSet[0])
    setValue2(valueForSet[1])
  };


  return (
    <div>
      <hr/>
      <div className={'title__hw'}><span>HOMEWORK 11</span></div>
      <div className={'row'}>
        <span className={sDouble.value}>{value1}</span>
        <SuperRange
          onChangeRange={setValue1}
          value={value1}
        />
      </div>
      <div className={'row'}>
        <span className={sDouble.value}>{value1}</span>
        <AlternativeSuperRange
          onChangeRange={setValue1}
          value={value1}
        />
      </div>

      <div className={'row'}>
        <span className={sDouble.value}>{value1}</span>
        <SuperDoubleRange
          value={[value1, value2]}
          min={0}
          max={100}
          onChangeRange={handleChange}
        />
        <span className={sDouble.value}>{value2}</span>
      </div>

      <hr/>

      <hr/>
    </div>
  )
}

export default HW11
