import React, { useState } from 'react'

import colors from '../../styles/colors.scss'
import './style_down.scss'
import { ArrowD } from '../../images/icons'

// import { ReactComponent as Arrow } from '../../images/arrow_down.svg'

interface SelectProps {
  data: any;
  keys: string;
  options: string;
  emptyAlert?: string;
  handleOnChange?: any;
}

export const SelectDown = (props: SelectProps) => {
  const { data, keys, options, emptyAlert = 'no data', handleOnChange } = props

  const [allItemsList, setAllItemsList] = useState(data)
  const [isOpen, setIsOpen] = useState(false)
  const [textS, setTextS] = useState({
    [keys]: 'default',
    [options]: 'choose smthg'
  })
  const [inputValue, setInputValue] = useState('')

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
                textS.numericCode === element.numericCode
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

  return (
    <div className='select'>
      <div
        className='select__box'
        onClick={() => {
          setIsOpen(!isOpen)
        }}
        style={{
          borderBottom: isOpen ? `2px solid ${colors.main}`
          : `2px solid ${colors.lightBorder}` 
        }} 
      >
        <input
          type='text'
          className='select__input'
          onChange={findListItem}
          placeholder={textS[options]}
          value={inputValue}
        />
        <div className='select__arrow'>
          <ArrowD style={{ fill: isOpen ? colors.accent : colors.dark }} />
        </div>
      </div>
      <div
        className='select__list'
        style={{ maxHeight: isOpen ? '250px' : '0px' }}
      >
        {createListItem()}
      </div>
    </div>
  )
}
