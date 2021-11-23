import React, { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSortBy, useTable } from "react-table";
import Media from "react-media";
import { COLUMNS } from "./columns";
import { nanoid } from "nanoid";
import {
  transactionsOperations,
  transactionsSelectors,
} from "../../redux/transactions";

import ModalAddTransaction from "../ModalAddTransaction";

const HomeTabMobile = () => {
  const columns = useMemo(() => COLUMNS, []);
  const data = useSelector(transactionsSelectors.getTransactions);

  const dispatch = useDispatch();
  const { getTableProps, getTableBodyProps, rows } = useTable(
    { columns, data },
    useSortBy
  );

  useEffect(() => {
    dispatch(transactionsOperations.fetchTransactions());
  }, [dispatch]);

  return (
    <>
      <div className="HomeTab-mobile">
        {rows.map((row, i) => {
          return (
            <table
              className={
                data[i].type === "+"
                  ? `${"HomeTab-mobile_table"}  ${"green"}`
                  : `${"HomeTab-mobile_table "}  ${"red"}`
              }
              {...getTableProps()}
            >
              <tbody
                className="HomeTab-mobile"
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
                  <td
                    className={
                      data[i].type === "+"
                        ? `${"HomeTab-column"}  ${"green"}`
                        : `${"HomeTab-column"}  ${"red"}`
                    }
                  >
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
        <ModalAddTransaction />
      </div>
    </>
  );
};
export { HomeTabMobile };
