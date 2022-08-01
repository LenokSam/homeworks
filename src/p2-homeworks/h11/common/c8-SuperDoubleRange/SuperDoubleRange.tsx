import React from 'react'
import {Box, Slider} from '@mui/material';
import {isBigInt64Array} from 'util/types';


type SuperDoubleRangePropsType = {
  onChangeRange?: (value: number | number[]) => void
  value?: number | number[]
  min: number
  max: number
  step?: number
  disable?: boolean
  // min, max, step, disable, ...
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
  {onChangeRange, min, max, value, step, disable}
) => {

  // const [value, setValue] = React.useState<number[]>([min, max]);
  //
  const handleChange = (event: Event, newValue: number | number[]) => {
    onChangeRange && onChangeRange(newValue as number[]);
  };

  return (
    <Box sx={{marginLeft: '15px', marginRight: '15px', width: '150px'}}>
      <Slider
        value={value}
        onChange={handleChange}
        color="secondary"
        min={min}
        max={max}
        step={step}
        disabled={disable}
      />
    </Box>
  )
}

export default SuperDoubleRange
