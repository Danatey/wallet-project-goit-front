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

  useEffect(() => {
    // (1) определить в области обратного вызова эффекта
    const fetch = async () => {
      console.log(1);
      try {
        const data = await fetchCurrency();
        const sliced = data.slice(0, -1);
        setCurrency([...sliced]);
      } catch (error) {
        console.log(error);
      }
    };

    const id = setInterval(() => {
      fetch(); // <- (3) вызов в интервале обратного вызова
    }, 300000);

    fetch(); // <- (2) вызываем при монтировании

    return () => clearInterval(id);
  }, []);

  return (
    <>
      <div className="currency_sidebar">
        <TableContainer className="currency_table">
          <Table size="small">
            <TableHead className="currency_head">
              <TableRow>
                <TableCell className="currency_header">Валюта</TableCell>
                <TableCell align="center" className="currency_header">
                  Покупка
                </TableCell>
                <TableCell align="center" className="currency_header">
                  Продажа
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody className="currency_body">
              {currency?.map((element) => (
                <TableRow key={element.ccy}>
                  <TableCell
                    component="th"
                    scope="row"
                    align="left"
                    className="currency_currency"
                  >
                    {element.ccy}
                  </TableCell>
                  <TableCell align="center" className="currency_buy">
                    {Math.floor(element.buy * 100) / 100}
                  </TableCell>
                  <TableCell align="center" className="currency_sell">
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
