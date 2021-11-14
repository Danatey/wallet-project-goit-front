import React from 'react'
import styled from 'styled-components'
import { useTable, useGroupBy, useExpanded } from 'react-table'
import s from './diagramm.module.css'

// import makeData from './makeData'

  function Table({ columns, data, colors}) {
    // Use the state and functions returned from useTable to build your UI
    const {
      getTableProps,
      getTableBodyProps,
      headerGroups,
      rows,
      prepareRow,
    } = useTable({
      columns,
      data,
    })
    

    // Render the UI for your table
    return (
      <table {...getTableProps()} className={s.tableStyle}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row, i) => {
            prepareRow(row)
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => {
                  return    <td {...cell.getCellProps()}>
                                <div  className={s.rectangle}  style={{width: 24 + 'px', height: 24 + 'px', backgroundColor: colors[i]}}></div>
                                {cell.render('Cell')}
                            </td>
                })}
              </tr>
            )
          })}
        </tbody>
      </table>
    )
  }
  
  function TableStats({data, colors}) {
    const columns = React.useMemo(
        () => [
          {
            Header: 'Категория',
            accessor: 'name',
          },
          {
            Header: 'Сумма',
            accessor: 'value',
          },
        ],
        []
      )



    return (
        <>
    
    <Table columns={columns} data={data} colors = {colors} className={s.tableStyle}/>
</>
    )
  }
  

export default TableStats

