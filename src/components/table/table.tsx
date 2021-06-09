import React, { useEffect, useState } from 'react'

import { Pagination } from '../pagination/pagination'

import { Columns } from './columns'
import './style.scss'

interface ColumnsInclude {
  name: string;
  key: string | number;
  sortable: boolean;
  searchable: boolean;
}

interface PaginationInclud {
  initPage: number;
  limitPerPage: number;
}

interface TableProps {
  columns: ColumnsInclude[];
  data: Record<string, any>[];
  tableName: string;
  grid?: string;
  pagination?: PaginationInclud;
  handleOnChange?: any;
}

export const Table = (props: TableProps) => {
  const {
    columns,
    data,
    tableName,
    grid,
    pagination = { initPage: 1, limitPerPage: 10 },
    handleOnChange
  } = props
  // дописать кастомные действия
  console.log(handleOnChange)

  // array of searchable columns
  const inputs = {}
  columns.forEach((item) => {
    if (item.searchable) {
      inputs[item.name] = ''
    }
  })
  // obj of searchable columns and there current values
  const [inputValue, setInputValue] = useState(inputs)
  // data after search
  const [filteredData, setFilteredData] = useState(data)
  // pagination state
  const [paginationTab, setPaginationTab] = useState({
    total: filteredData.length,
    initPage: pagination.initPage || 1,
    limitPerPage: pagination.limitPerPage || 10
  })
  // sort (a - b) or (b - a)
  const [DESC, setDESC] = useState(false)

  // foo to filter data
  const filterData = () => {
    let newDataArray: any = []

    // current filtered columns
    const actualFilterInput = Object.keys(inputValue).filter(
      (el) => inputValue[el]
    )

    // result of filter
    if (!actualFilterInput.length) {
      // if no filtered column
      newDataArray = data
    } else {
      data.forEach((item) => {
        for (let i = 0; i < actualFilterInput.length; ) {
          const el = actualFilterInput[i]
          if (
            item[el].includes(inputValue[el]) &&
            i === actualFilterInput.length - 1
          ) {
            newDataArray.push(item)
            return
          } else if (item[el].includes(inputValue[el])) {
            i++
          } else {
            i = actualFilterInput.length - 1
            return
          }
        }
      })
    }

    // to change pagination state after filter
    setPaginationTab({
      ...paginationTab,
      total: newDataArray.length,
      initPage: 1
    })

    // to change data to render after filter
    return setFilteredData(newDataArray)
  }

  // render data with limited items per page
  const dataToRender = () => {
    let actualPageData: object[] = []
    if (filteredData.length > pagination.limitPerPage) {
      const since =
        paginationTab.initPage * pagination.limitPerPage -
        pagination.limitPerPage
      const upto = paginationTab.initPage * pagination.limitPerPage
      const page = filteredData.slice(since, upto)
      actualPageData = page
    } else {
      actualPageData = filteredData
    }

    return actualPageData.map((row, i) => (
      <tr
        className='table__row'
        style={{ gridTemplateColumns: grid || 'none' }}
        key={i}
      >
        {columns.map((el) => {
          return (
            <td className='table__cell' key={el.key}>
              {row[el.key]}
            </td>
          )
        })}
      </tr>
    ))
  }

  useEffect(() => {
    filterData()
    dataToRender()
  }, [inputValue])

  return (
    <div className='table__box'>
      <div className='table__header'>
        <h2>{tableName}</h2>
        <Pagination
          pagination={paginationTab}
          setPagination={setPaginationTab}
        />
      </div>
      <table className='table'>
        <thead>
          <Columns
            data={filteredData}
            setData={setFilteredData}
            columns={columns}
            grid={grid}
            inputValue={inputValue}
            setInputValue={setInputValue}
            DESC={DESC}
            setDESC={setDESC}
          />
        </thead>
        <tbody>{dataToRender()}</tbody>
      </table>
    </div>
  )
}
