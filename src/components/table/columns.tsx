import React, { useState } from 'react'

import './style.scss'
import colors from '../../styles/colors.scss'
import { ArrowD, Eye } from '../../images/icons'

// import {ReactComponent as Arrow} from '../../images/arrow_down.svg'
// import { ReactComponent as Eye } from '../../images/eye.svg'

interface ColumnsIncludes {
  name: string;
  key: string | number;
  sortable: boolean;
  searchable: boolean;
}

interface ColumnProps {
  data: Record<string, any>[];
  columns: ColumnsIncludes[];
  grid?: string;
  setData: any;
  inputValue: object;
  setInputValue: any;
  DESC: boolean;
  setDESC: any;
}

export const Columns = (props: ColumnProps) => {
  const {
    data,
    columns,
    grid,
    setData,
    inputValue,
    setInputValue,
    DESC,
    setDESC
  } = props
  const [isOpenSearch, setIsOpenSearch] = useState({})

  const sortData = (key: string | number) => {
    const newDataArray = data.sort(function (a, b) {
      if (a[key] > b[key]) {
        return DESC ? 1 : -1
      }
      if (a[key] < b[key]) {
        return DESC ? -1 : 1
      }
      return 0
    })
    setDESC(!DESC)
    return setData(newDataArray)
  }

  const typeOfColumn = (item: ColumnsIncludes) => {
    if (item.searchable && item.sortable) {
      // searchable & sortable column
      return (
        <React.Fragment>
          {!isOpenSearch[item.name] && (
            <p className='table__cell__top__pointer'>
              {item.name}
              <span
              onClick={() => {
                sortData(item.key)
              }}>
                <ArrowD
                  fill={colors.semiton}
                  style={{ marginLeft: '8px' }}
                />
              </span>
              <span
              onClick={() => {
                setIsOpenSearch({ ...isOpenSearch, [item.name]: true })
              }}>
                <Eye
                  fill={colors.semiton}
                  style={{ marginLeft: '8px' }}
                />
              </span>
            </p>
          )}

          {isOpenSearch[item.name] && (
            <React.Fragment>
              <input
                type='search'
                className='table__cell__top__input'
                placeholder='поиск'
                value={inputValue[item.name]}
                autoFocus
                onChange={(e) => {
                  setInputValue({ ...inputValue, [item.name]: e.target.value })
                }}
              />
              <button
                type='submit'
                className='table__cell__top__btn'
                onClick={() => {
                  setIsOpenSearch({ ...isOpenSearch, [item.name]: false })
                }}
              >
                <img src='https://image.flaticon.com/icons/png/512/786/786195.png' alt='close' />
              </button>
            </React.Fragment>
          )}
        </React.Fragment>
      )
    } else if (item.searchable) {
      // searchable column
      return (
        <React.Fragment>
          {!isOpenSearch[item.name] && (
            <p
              className='table__cell__top__pointer'
            >
              {item.name}
              <span
                onClick={() => {
                  setIsOpenSearch({ ...isOpenSearch, [item.name]: true })
                }} >
                <Eye fill={colors.semiton} style={{ marginLeft: '8px' }} />
              </span>
            </p>
          )}

          {isOpenSearch[item.name] && (
            <React.Fragment>
              <input
                type='search'
                className='table__cell__top__input'
                placeholder='поиск'
                value={inputValue[item.name]}
                autoFocus
                onChange={(e) => {
                  setInputValue({ ...inputValue, [item.name]: e.target.value })
                }}
              />
              <button
                type='submit'
                className='table__cell__top__btn'
                onClick={() => {
                  setIsOpenSearch({ ...isOpenSearch, [item.name]: false })
                }}
              >
                <img src='https://image.flaticon.com/icons/png/512/786/786195.png' alt='close' />
              </button>
            </React.Fragment>
          )}
        </React.Fragment>
      )
    } else if (item.sortable) {
      // sortable column
      return (
        <p className='table__cell__top__pointer' >
          {item.name}
          <span
          onClick={() => {
            sortData(item.key)
          }}>
            <ArrowD fill={colors.semiton} style={{ marginLeft: '8px' }} />
          </span>
        </p>
      )
    } else {
      // classic column
      return <p>{item.name}</p>
    }
  }

  return (
    <tr
      className='table__row__top'
      style={{ gridTemplateColumns: grid || 'none' }}
    >
      {columns.map((item: ColumnsIncludes) => (
        <td key={item.key} className='table__cell__top'>
          {typeOfColumn(item)}
        </td>
      ))}
    </tr>
  )
}
