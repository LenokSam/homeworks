import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes} from 'react'
import s from './SuperRange.module.css'
import {Box, Slider} from '@mui/material';

// тип пропсов обычного инпута

type SuperRangePropsType = {
  onChangeRange?: (value: number) => void
  value: number
  className?: string
};

const AlternativeSuperRange: React.FC<SuperRangePropsType> = (
  {
    onChangeRange,
    className, value,
  }
) => {

  const handleChange = (event: Event, newValue: number | number[]) => {
    onChangeRange && onChangeRange(newValue as number);
  };

  return (
    <Box sx={{marginLeft: '15px', marginRight: '15px', width: '150px'}}>
      <Slider
        onChange={handleChange}
        value={value}
        color="secondary"
      />
    </Box>
  )
}

export default AlternativeSuperRange
