import React, { useState } from 'react'
import './style.scss'

interface CheckboxProps {
  name: string;
  value?: boolean;
  handleOnChange?: any;
  disabled?: boolean;
}

export const Checkbox: React.FC<CheckboxProps> = (props) => {
  const { name, value, disabled, handleOnChange } = props
  const [checked, setChecked] = useState(value)

  return (
    <div className='checkbox__item'>
      <input
        className='checkbox__input'
        type='checkbox'
        name={name}
        id={name}
        disabled={disabled}
        checked={checked}
        onChange={(e) => {
          setChecked(!checked)
          handleOnChange && handleOnChange(e)
        }}
      />
      <label className='checkbox__label' htmlFor={name}>
        {name}
      </label>
    </div>
  )
}
