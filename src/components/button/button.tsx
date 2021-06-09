import React from 'react'
import './style.scss'
// import style from './style.scss'

interface ButtonProps {
  type: 'button' | 'reset' | 'submit';
  name: string;
  customStyle?: object;
  handleOnChange?: any;
  disabled?: boolean;
  autofocus?: boolean;
}

export const Button = (props: ButtonProps) => {
  const { type, name, customStyle, disabled, autofocus, handleOnChange } = props

  return (
    <button
      // className={style.button}
      className="button"
      type={type}
      name={name}
      disabled={disabled}
      style={customStyle}
      autoFocus={autofocus}
      onClick={(e) => {
        handleOnChange && handleOnChange(e)
      }}
    >
      {name}
    </button>
  )
}
