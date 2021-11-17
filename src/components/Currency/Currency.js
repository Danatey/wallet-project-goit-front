import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
} from "@material-ui/core";
import "./Currency.scss";
import fetchCurrency from "../../assets/API/fetchCurrency/fetchCurrency";

function Currency() {
  const [currency, setCurrency] = useState([]);

  const fetch = async () => {
    try {
      const data = await fetchCurrency();
      const sliced = data.slice(0, -1);
      setCurrency([...sliced]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetch();
  }, []);

  return (
    <>
      <div className="currency-sidebar">
        <TableContainer className="table">
          <Table size="small">
            <TableHead className="head">
              <TableRow>
                <TableCell className="header">Валюта</TableCell>
                <TableCell align="center" className="header">
                  Покупка
                </TableCell>
                <TableCell align="center" className="header">
                  Продажа
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody className="body">
              {currency?.map((element) => (
                <TableRow key={element.ccy}>
                  <TableCell
                    component="th"
                    scope="row"
                    align="left"
                    className="currency"
                  >
                    {element.ccy}
                  </TableCell>
                  <TableCell align="center" className="buy">
                    {Math.floor(element.buy * 100) / 100}
                  </TableCell>
                  <TableCell align="center" className="sell">
                    {Math.floor(element.sale * 100) / 100}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  );
}

export default Currency;
