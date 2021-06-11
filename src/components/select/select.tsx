import React, { useState } from 'react'

import colors from '../../styles/colors.scss'
import './style.scss'
import { ArrowD } from '../../images/icons'

// import { ReactComponent as Arrow } from '../../images/arrow_down.svg'

interface SelectProps {
  data: any;
  keys: string;
  options: string;
  styleProps: 'default' | 'down' | 'top';
  emptyAlert?: string;
  handleOnChange?: any;
}

export const Select = (props: SelectProps) => {
  const { data, keys, options, styleProps, emptyAlert = 'no data', handleOnChange } = props

  const [allItemsList, setAllItemsList] = useState(data)
  const [isOpen, setIsOpen] = useState(false)
  const [textS, setTextS] = useState({
    [keys]: 'default',
    [options]: 'choose smthg'
  })
  const [inputValue, setInputValue] = useState('')
  const [focus, setFocus] = useState(false)

  console.log(colors)

  const chooseListItem = (element: any) => {
    setTextS(element)
    setInputValue(element.name)
    setIsOpen(!isOpen)

    if (textS[keys] === element.keys) {
      setTextS({ [options]: 'choose smthg' })
      setInputValue('')
      setAllItemsList(data)
    }
  }

  const createListItem = () => {
    if (allItemsList.length === 0) {
      return <div className='select__list__item'>{emptyAlert}</div>
    } else {
      return allItemsList.map((element: any) => {
        return (
          <div
            className='select__list__item'
            onClick={() => {
              chooseListItem(element)
              handleOnChange()
            }}
            key={element[keys]}
            style={{
              color:
                textS[keys] === element[keys]
                  ? colors.accent
                  : colors.dark
            }}
          >
            {element[options]}
          </div>
        )
      })
    }
  }

  const findListItem = (event: any) => {
    const filtredList = data.filter((element: any) =>
      element[options].toLowerCase().includes(event.target.value.toLowerCase())
    )
    setInputValue(event.target.value)
    setAllItemsList(filtredList)
    setIsOpen(true)
  }

  window.onclick = function (event: any) {
    if (
      event.target.tagName !== 'svg' &&
      event.target.tagName !== 'path' &&
      !event.target.className.includes('select')
    ) {
      setIsOpen(false)
    }
  }

  const onFocus = () => {
    if (!focus) setFocus(true)
  }

  const onBlur = () => {
    setTimeout(() => {
      if (focus) setFocus(false)
    }, 0)
  }

  const getBorder = () => {
    if (styleProps === 'default') {
      if (focus) return `2px solid ${colors.main}`
      else return
    } else if (styleProps === 'top') {
      if (focus) return `2px solid ${colors.main}`
      else return `2px solid ${colors.lightBorder}`
    } else {
      return
    }
  }
  const getBorderBottom = () => {
    if (styleProps === 'down') {
      if (focus) return `2px solid ${colors.main}`
      else return `2px solid ${colors.lightBorder}`
    } else return
  }

  return (
    <div className={`${styleProps}__select`}>
      <div
        className={`${styleProps}__select__box`}
        onClick={() => {
          setIsOpen(!isOpen)
        }}
        style={{
          borderBottom: getBorderBottom(),
          border: getBorder(), 
        }} 
      >
        <input
          type='text'
          className={`${styleProps}__select__input`}
          onChange={findListItem}
          placeholder={textS[options]}
          value={inputValue}
          onFocus={onFocus}
          onBlur={onBlur}
        />
        <div className={`${styleProps}__select__arrow `}>
          <ArrowD style={{ fill: isOpen ? colors.accent : colors.dark }} />
        </div>
      </div>
      <div
        className={`${styleProps}__select__list`}
        style={{ maxHeight: isOpen ? '250px' : '0px' }}
      >
        {createListItem()}
      </div>
    </div>
  )
}