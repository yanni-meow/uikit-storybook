import React, { useState } from 'react'

import colors from '../../styles/colors.scss'
import './style.scss'

import { User, Mail } from '../../images/icons'
// import { ReactComponent as User } from '../../images/user.svg'
// import { ReactComponent as Mail } from '../../images/mail.svg'

interface InputProps {
  type: 'text' | 'email';
  styleProps: 'top' | 'default' | 'down';
  placeholder?: string;
  popupPlaceholder?: string;
  icon?: 'name' | 'mail';

  handleOnChange?: any;
  customOnValidationError?: any;
  customOnValidationSuccess?: any;
}

export const InputText = ({
  type,
  styleProps,
  placeholder,
  popupPlaceholder,
  icon,

  handleOnChange,
  customOnValidationError,
  customOnValidationSuccess
}: InputProps) => {

  const [focus, setFocus] = useState(false)
  const [inputValue, setInputValue] = useState('')
  const [validError, setValidError] = useState(false)

  const validateEmail = (email: any) => {
    const re = /\S+@\S+\.\S+/
    return re.test(email)
  }

  const validationSwitch = (type: string) => {
    switch (type) {
      case 'email':
        if (inputValue.length > 0 && !validateEmail(inputValue)) {
          setValidError(true)
          customOnValidationError && customOnValidationError()
        } else {
          setValidError(false)
          customOnValidationSuccess && customOnValidationSuccess()
        }
        return
      case 'text':
        if (inputValue && inputValue.length < 3) {
          setValidError(true)
          customOnValidationError && customOnValidationError()
        } else {
          setValidError(false)
          customOnValidationSuccess && customOnValidationSuccess()
        }
        return
      default:
        return null
    }
  }

  const onFocus = () => {
    if (!focus) setFocus(true)
  }

  const onBlur = () => {
    setTimeout(() => {
      if (focus) setFocus(false)
    }, 0)

    validationSwitch(type)
  }

  const getBorder = () => {
    if (styleProps === 'default') {
      if (validError) return `2px solid ${colors.mistake}`
      else if (focus) return `2px solid ${colors.main}`
      else return
    } else if (styleProps === 'top') {
      if (validError) return `2px solid ${colors.mistake}`
      else if (focus) return `2px solid ${colors.main}`
      else return `2px solid ${colors.lightBorder}`
    } else {
      return
    }
  }

  const getBorderBottom = () => {
    if (styleProps === 'down') {
      if (validError) return `2px solid ${colors.mistake}`
      else if (focus) return `2px solid ${colors.main}`
      else return `2px solid ${colors.lightBorder}`
    } else return
  }

  return (
    <div className={`${styleProps}__input__box`}>
      <input
        type={type}
        placeholder={focus ? placeholder : ''}
        className={`${styleProps}__input`}
        onChange={(e) => {
          setInputValue(e.target.value)
          handleOnChange && handleOnChange(e.target.value)
        }}
        onFocus={onFocus}
        onBlur={onBlur}

        style={{
          borderBottom: getBorderBottom(),
          border: getBorder(),
        }}
      />

      {popupPlaceholder && (
        <p
          className={
            inputValue.length > 0
              ? `${styleProps}__input__placeholder__done`
              : `${styleProps}__input__placeholder`
          }
          style={{ color: validError ? colors.mistake : '' }}
        >
          {popupPlaceholder}
        </p>
      )}

      {styleProps === 'default' &&
        (icon === 'name' ? (
          <User fill={validError ? colors.mistake : colors.dark} />
        ) : icon === 'mail' ? (
          <Mail fill={validError ? colors.mistake : colors.dark} />
        ) : null)
      }
    </div>
  )
}