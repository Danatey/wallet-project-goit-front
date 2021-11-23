import React, { useState, useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSortBy, useTable } from "react-table";
import Media from "react-media";
import { COLUMNS } from "./columns";
import { AiOutlineUp, AiOutlineDown } from "react-icons/ai";
import { nanoid } from "nanoid";
import {
  transactionsOperations,
  transactionsSelectors,
} from "../../redux/transactions";

import { HomeTabMobile } from "./HomeTabMobile";
import ModalAddTransaction from "../ModalAddTransaction";
// import NoTransaction from "../NoTransaction";

import "./homeTab.scss";

const HomeTab = () => {
  const columns = useMemo(() => COLUMNS, []);
  const data = useSelector(transactionsSelectors.getTransactions);

  const dispatch = useDispatch();
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data }, useSortBy);

  useEffect(() => {
    dispatch(transactionsOperations.fetchTransactions());
  }, [dispatch]);
  return (
    <>
      <Media
        queries={{
          mobile: "(min-width: 768px)",
        }}
      >
        {({ mobile }) => (
          <div className="HomeTab">
            {!mobile ? (
              <HomeTabMobile />
            ) : (
              <table className="HomeTab-secondary" {...getTableProps()}>
                <thead className="HomeTab__header">
                  {headerGroups.map((headerGroup) => (
                    <tr
                      key={() => {
                        nanoid();
                      }}
                      {...headerGroup.getHeaderGroupProps()}
                    >
                      {headerGroup.headers.map((column) => (
                        <th
                          className="HomeTab-column-header"
                          {...column.getHeaderProps(
                            column.getSortByToggleProps()
                          )}
                        >
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
                      <tr
                        className="Home-color"
                        key={() => {
                          nanoid();
                        }}
                        {...row.getRowProps()}
                      >
                        {row.cells.map((cell) => {
                          return (
                            <td
                              key={() => {
                                nanoid();
                              }}
                              className={
                                row.values.type === "+"
                                  ? `${"HomeTab-column"}  ${"green"}`
                                  : `${"HomeTab-column"}  ${"red"}`
                              }
                              {...cell.getCellProps()}
                            >
                              {cell.render("Cell")}
                            </td>
                          );
                        })}
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            )}
          </div>
        )}
      </Media>
      <ModalAddTransaction />{" "}
    </>
  );
};

export default HomeTab;
