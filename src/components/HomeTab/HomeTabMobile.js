import React, { useEffect, useMemo, useState } from "react";
import { useSortBy, useTable } from "react-table";
import { useDispatch, useSelector } from "react-redux";
// import MOCK_DATA from "./MOCK_DATA.json";
import { COLUMNS } from "./columns";
import {
  transactionsSelectors,
  transactionsOperations,
} from "../../redux/transactions";

const HomeTabMobile = () => {
  const columns = useMemo(() => COLUMNS, []);
  // const data = useMemo(() => MOCK_DATA, []);
  const data = useSelector(transactionsSelectors.getTransactions);

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

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(transactionsOperations.fetchTransactions());
  }, [dispatch]);

  return (
    <table className="HomeTab-mobile" {...getTableProps()}>
      {rows.map((row, i) => {
        return (
          <tbody key={row.id} {...getTableBodyProps()}>
            <tr>
              <td className="HomeTab-column-header">Дата</td>
              <td className="HomeTab-column">{data[i].date}</td>
            </tr>
            <tr>
              <td className="HomeTab-column-header">Тип</td>
              <td className="HomeTab-column">{data[i].type}</td>
            </tr>
            <tr>
              <td className="HomeTab-column-header">Коментарий</td>
              <td className="HomeTab-column">{data[i].comment}</td>
            </tr>
            <tr>
              <td className="HomeTab-column-header">Категория</td>
              <td className="HomeTab-column">{data[i].category}</td>
            </tr>
            <tr>
              <td className="HomeTab-column-header">Сумма</td>
              <td className="HomeTab-column">{data[i].amount}</td>
            </tr>
            <tr>
              <td className="HomeTab-column-header">Баланс</td>
              <td className="HomeTab-column">{data[i].balance}</td>
            </tr>
          </tbody>
        );
      })}
    </table>
  );
};
export { HomeTabMobile };
