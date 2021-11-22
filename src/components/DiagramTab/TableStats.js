import React from 'react'
import { useSelector } from 'react-redux'
import { useTable } from 'react-table'
import { getCategoriesStats } from '../../redux/transactions/transactions-selectors'

import s from './diagramm.module.scss'
import TableFilters from './TableFilters'

function Table({ columns, colors }) {
  const stats = useSelector(getCategoriesStats)

  // Use the state and functions returned from useTable to build your UI
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({
      columns,
      data: stats?.data ? stats.data : [],
    })

  // Render the UI for your table
  return (
    <table {...getTableProps()} className={s.tableStyle}>
      <thead className={s.tableHeaderStyle}>
        {headerGroups.map((headerGroup) => {
          const { key, ...restHeaderGroupProps } =
            headerGroup.getHeaderGroupProps()
          return (
            <tr key={key} {...restHeaderGroupProps} className={s.tableHeader}>
              {headerGroup.headers.map((column) => {
                const { key, ...restColumn } = column.getHeaderProps()
                return (
                  <th key={key} {...restColumn} className={s.rowStatsStyle}>
                    {column.render('Header')}
                  </th>
                )
              })}
            </tr>
          )
        })}
      </thead>
      <tbody {...getTableBodyProps} className={s.bodyStatsStyle}>
        {rows.map((row, i) => {
          prepareRow(row)
          const { key, ...restRowProps } = row.getRowProps()
          return (
            <tr key={key} {...restRowProps} className={s.trStatsStyle}>
              {row.cells.map((cell) => {
                const { key, ...restCellProps } = cell.getCellProps()
                return (
                  <td
                    key={key}
                    {...restCellProps}
                    className={s.columnStatsStyle}
                  >
                    <span
                      className={s.rectangle}
                      style={{
                        width: 24 + 'px',
                        height: 24 + 'px',
                        backgroundColor: colors[i],
                      }}
                    ></span>
                    {cell.render('Cell')}
                  </td>
                )
              })}
            </tr>
          )
        })}
      </tbody>
      <tfoot className={s.tableFooter}>
        {stats?.sumIncome.map((cash, i) => (
          <tr className={s.tableFooterCash} key={10001 & i}>
            <td className={s.columnFooterStatsStyle}>{cash.name}</td>
            <td className={s.cash}>{cash.value}</td>
          </tr>
        ))}
      </tfoot>
    </table>
  )
}

function TableStats({ colors }) {
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
      <TableFilters />
      <Table columns={columns} colors={colors} />
    </div>
  )
}

export default TableStats
