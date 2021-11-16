import React, { useMemo } from "react";
import { useSortBy, useTable } from "react-table";
import MOCK_DATA from "./MOCK_DATA.json";
import { COLUMNS } from "./columns";
import { AiOutlineUp, AiOutlineDown } from "react-icons/ai";

import "./table.scss";

const HomeTab = () => {
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => MOCK_DATA, []);

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data }, useSortBy);

  return (
    <div className="Table__home">
      <table className="Table__home-secondary" {...getTableProps()}>
        <thead className="Table__home-head-secondary">
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render("Header")}
                  <span>
                    {column.isSorted ? (
                      column.isSortedDesc ? (
                        <AiOutlineDown />
                      ) : (
                        <AiOutlineUp />
                      )
                    ) : (
                      ""
                    )}
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <>
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => {
                    return (
                      <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                    );
                  })}
                </tr>
              </>
            );
          })}
        </tbody>
      </table>

      <table className="Table__home-first" {...getTableProps()}>
        <tbody {...getTableBodyProps()}>
          for (i=0; i = data.length-1; ++i){" "}
          {
            <tr>
              <td>Дата</td>
              <td>data[i].date</td>
            </tr>
          }
          <tr>
            <td>Тип</td>
            <td>data[i].type</td>
          </tr>
          <tr>
            <td>Коментарий</td>
            <td>data[i].comment</td>
          </tr>
          <tr>
            <td>Категория</td>
            <td>data[i].category</td>
          </tr>
          <tr>
            <td>Сумма</td>
            <td>data[i].sum</td>
          </tr>
          <tr>
            <td>Баланс</td>
            <td>data[i].balance</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default HomeTab;
