import React, { useState } from 'react'
import { useTable, useGroupBy, useExpanded } from 'react-table'
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import s from './diagramm.module.scss'

// import makeData from './makeData'

const Year = () => {
  const [startDate, setStartDate] = useState(null);
  return (
    <DatePicker
      selected={startDate}
      onChange={(date) => setStartDate(date)}
      showYearPicker
      dateFormat="yyyy"
      placeholderText="Год"
      className={[s.arrow, s.dateInput]}
      
    />
  );
};

const Month = () => {
  const [startDate, setStartDate] = useState(null);
  return (
    <DatePicker
      selected={startDate}
      onChange={(date) => setStartDate(date)}
      dateFormat="MMM"
      showMonthYearPicker
      placeholderText="Месяц"
      className={[s.arrow, s.dateInput]}
    />
  );
};


  function Table({ columns, data, colors, sumIncome}) {
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
        <thead className={s.tableHeaderStyle}>
          {headerGroups.map(headerGroup => (
            <tr className={s.tableHeader} {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps()} className={s.rowStatsStyle}>{column.render('Header')}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()} className={s.bodyStatsStyle}>
          {rows.map((row, i) => {
            prepareRow(row)
            return (
              <tr {...row.getRowProps()} className={s.trStatsStyle}>
                {row.cells.map(cell => {
                  return    <td {...cell.getCellProps()} className={s.columnStatsStyle}>
                                <div  className={s.rectangle}  style={{width: 24 + 'px', height: 24 + 'px', backgroundColor: colors[i]}}></div>
                                {cell.render('Cell')}
                            </td>
                })}
              </tr>
            )
          })}
        </tbody>
        <tfoot className={s.tableFooter}>
        {sumIncome.map(cash => (
          <tr className={s.tableFooterCash}>
            <td className={s.columnFooterStatsStyle}>
            {cash.type}
            </td>
           <td className={s.cash}>
           {cash.money}
           </td>
         </tr>
        ))}
        </tfoot>
      </table>
    )
  }
  
  function TableStats({data, colors, sumIncome}) {
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
    <div className={s.table}>
      <div className={s.dateFilter}>
        <Month className={s.formFilter}/>
        <Year className={s.formFilter}/>
      </div>
      <Table columns={columns} data={data} colors = {colors} sumIncome={sumIncome} className={s.tableStyle}/>

      </div>
    )
  }
  
export default TableStats