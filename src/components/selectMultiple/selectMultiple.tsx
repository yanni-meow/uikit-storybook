import React, { useState } from 'react'

import { ArrowD } from '../../images/icons' // , Check
import './style.scss'

interface SelectMultiProps {
    groups: any;
    options: string;
    choice: any;
    setChoice: any;
    widthInput?: string;
    widthList?: string;
    heightList?: string;
}

export const SelectMultiple = (props: SelectMultiProps) => {
  const { groups, options, choice, setChoice, widthInput, widthList, heightList } = props
  
  const [allGroupsList, setAllGroupsList] = useState(groups)
  const [isOpen, setIsOpen] = useState(false)
  const [inputValue, setInputValue] = useState('')

  // отображаем выбранные options
  const createChoosenEl = () => {
      let items: any[] = [] 
      const delItem = (el: any) => {
        items = items.filter((item: any) => item.props.id !== el.currentTarget.id)
        setChoice(choice.filter((item: any) => item[options] !== el.currentTarget.id))
      }

      choice.forEach((el: any) => {
        items.push(
            <li className='select__box__choise' id={el[options]} key={el[options]}>
                <p className='select__box__choise__name'>{el[options]}</p>
                <button className='select__box__choise__btn' id={el[options]} onClick={delItem}>x</button>
            </li>
        )
      }) 
      return items
  }

  // функция добавляющая option в список выбранных
  const chooseListItem = (element: any) => {
    setInputValue('');
    // проверка есть ли уже этот option в списке выбранных
    const tryIt = choice.filter((item: any) => item[options] === element[options]).length;
    // если нет, обновлем state
    if(!tryIt) setChoice((oldItems: any) => [...oldItems, element])
    setAllGroupsList(groups)
  }

  // создаем options list
  const createListItem = () => {
    const keys = Object.keys(allGroupsList);
    // проверка на наличие данных
    if (keys.length !== 0) {
        // создание списка options внутри групп
        return keys.map((k) => {
            const list = allGroupsList[k].map((element: any) => {

                return (
                    <div
                        className='select__list__item'
                        onClick={() => {
                            chooseListItem(element)
                        }}
                        key={element[options]}
                        style={{
                            background: choice.filter((item: any) => item[options] === element[options]).length && '#F1F2F6'
                        }}
                    >
                        <span className='select__list__item__name'>
                          {element[options]}
                        </span>
                        {/* <Check style={{opacity: choice.filter((item: any) => item[options] === element[options]).length ? '1' : '0'}} 
                        fill={ choice.filter((item: any) => item[options] === element[options]).length ? '' : 'transparent'}/> */}
                    </div>
                )
            })

            // key - название группы
            return (
                <div 
                    key={k}
                    className='select__list__group'
                >
                    <p className='select__list__group__title'>{k}</p>
                    {list}
                </div>
            )
        })
    } else return
  }

  const findListItem = (event: any) => {
    const keys = Object.keys(allGroupsList);
    const filtredList = {};

    keys.forEach((key) => {
        const sorted = groups[key].filter((element: any) =>
            element[options].toLowerCase().includes(event.target.value.toLowerCase())
        )
        filtredList[key] = sorted;
    })

    setInputValue(event.target.value)
    setAllGroupsList(filtredList)
    setIsOpen(true)
  }

  // закрываем выпадающий список при клику вне dropdown
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
    <div 
      className='select'
      style={{ width: widthInput }}
    >

      <ul
        className='select__box'
        onClick={() => {
          setIsOpen(!isOpen)
        }}
      >
          {createChoosenEl()}
          <li style={{width: '100%'}}>
              <input
                  type='text'
                  className='select__input'
                  onChange={findListItem}
                  placeholder={choice.length ? '' : 'dropdown'}
                  value={inputValue}
              />
          </li>
          <li className='select__arrow'>
            <ArrowD />
          </li>
      </ul>
        
      <div
        className='select__list'
        style={{ 
          maxHeight: isOpen ? (heightList || '250px') : '0px',
          width: widthList
        }}
      >
        {createListItem()}
      </div>
    </div>
  )
}
