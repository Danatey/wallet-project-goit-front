import React, { useEffect, useMemo, useState } from "react";
import { useSortBy, useTable } from "react-table";
import MOCK_DATA from "./MOCK_DATA.json";
import { COLUMNS } from "./columns";

const HomeTabMobile = () => {
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => MOCK_DATA, []);

  //   const [textColor, setTextColor] = useState('black');
  //   const [isPink, setisPink] = useState(true);
  //   const changeTextColor = () => {
  //     if (data[i].type === '-') {
  //      setisPink(!isPink);
  //   setTextColor(isPink ? '#24cca7' : 'pink ');
  //   }

  // }

  // style={{ color:textColor}}
  const { getTableProps, getTableBodyProps, rows } = useTable(
    { columns, data },
    useSortBy
  );

  useEffect(() => {}, [data]);
  return (
    <>
      <div className="HomeTab-mobile">
        {rows.map((row, i) => {
          return (
            <table
              className="HomeTab-mobile HomeTab-mobile_table color"
              {...getTableProps()}
            >
              <tbody
                className="HomeTab-mobile_table color"
                key={row.id}
                {...getTableBodyProps()}
              >
                <tr className="HomeTab-row">
                  <td className="HomeTab-column-header">Дата</td>
                  <td className="HomeTab-column">{data[i].date}</td>
                </tr>
                <tr className="HomeTab-row">
                  <td className="HomeTab-column-header">Тип</td>
                  <td className="HomeTab-column">{data[i].type}</td>
                </tr>
                <tr className="HomeTab-row">
                  <td className="HomeTab-column-header">Коментарий</td>
                  <td className="HomeTab-column">{data[i].comment}</td>
                </tr>
                <tr className="HomeTab-row">
                  <td className="HomeTab-column-header">Категория</td>
                  <td className="HomeTab-column ">{data[i].category}</td>
                </tr>
                <tr className="HomeTab-row">
                  <td className="HomeTab-column-header">Сумма</td>
                  <td className="HomeTab-column pink green">
                    {data[i].amount}
                  </td>
                </tr>
                <tr className="HomeTab-row">
                  <td className="HomeTab-column-header">Баланс</td>
                  <td className="HomeTab-column">{data[i].balance}</td>
                </tr>
              </tbody>
            </table>
          );
        })}
      </div>
    </>
  );
};
export { HomeTabMobile };
