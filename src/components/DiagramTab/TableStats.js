import React from "react";
import { useTable } from "react-table";
import s from "./diagramm.module.scss";
import TableFilters from "./TableFilters";

function Table({ columns, data, colors, sumIncome }) {
  // Use the state and functions returned from useTable to build your UI
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({
      columns,
      data,
    });

  // Render the UI for your table
  return (
    <table {...getTableProps()} className={s.tableStyle}>
      <thead className={s.tableHeaderStyle}>
        {headerGroups.map((headerGroup) => {
          const { key, ...restHeaderGroupProps } =
            headerGroup.getHeaderGroupProps();
          return (
            <tr key={key} {...restHeaderGroupProps} className={s.tableHeader}>
              {headerGroup.headers.map((column) => {
                const { key, ...restColumn } = column.getHeaderProps();
                return (
                  <th key={key} {...restColumn} className={s.rowStatsStyle}>
                    {column.render("Header")}
                  </th>
                );
              })}
            </tr>
          );
        })}
      </thead>
      <tbody {...getTableBodyProps} className={s.bodyStatsStyle}>
        {rows.map((row, i) => {
          prepareRow(row);
          const { key, ...restRowProps } = row.getRowProps();
          return (
            <tr key={key} {...restRowProps} className={s.trStatsStyle}>
              {row.cells.map((cell) => {
                const { key, ...restCellProps } = cell.getCellProps();
                return (
                  <td
                    key={key}
                    {...restCellProps}
                    className={s.columnStatsStyle}
                  >
                    <span
                      className={s.rectangle}
                      style={{
                        width: 24 + "px",
                        height: 24 + "px",
                        backgroundColor: colors[i],
                      }}
                    ></span>
                    {cell.render("Cell")}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
      <tfoot className={s.tableFooter}>
        {sumIncome.map((cash, i) => (
          <tr className={s.tableFooterCash} key={10001 & i}>
            <td className={s.columnFooterStatsStyle}>{cash.type}</td>
            <td className={s.cash}>{cash.money}</td>
          </tr>
        ))}
      </tfoot>
    </table>
  );
}

function TableStats({ data, colors, sumIncome }) {
  const columns = React.useMemo(
    () => [
      {
        Header: "Категория",
        accessor: "name",
      },
      {
        Header: "Сумма",
        accessor: "value",
      },
    ],
    []
  );

  return (
    <div className={s.table}>
      <TableFilters />
      <Table
        columns={columns}
        data={data}
        colors={colors}
        sumIncome={sumIncome}
        className={s.tableStyle}
      />
    </div>
  );
}

export default TableStats;
