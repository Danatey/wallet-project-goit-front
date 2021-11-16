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
// import fetchData from "../"

const fetchData = async () => {
  try {
    const response = await fetch(
      "https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=11"
    );
    const rates = response.json();
    return rates;
  } catch (error) {
    throw error;
  }
};

function Currency() {
  const [currency, setCurrency] = useState([]);

  const fetch = async () => {
    try {
      const data = await fetchData();
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
      <div class="currency-sidebar">
        <TableContainer class="table">
          <Table size="small">
            <TableHead class="head">
              <TableRow>
                <TableCell class="header">Валюта</TableCell>
                <TableCell align="center" class="header">
                  Покупка
                </TableCell>
                <TableCell align="center" class="header">
                  Продажа
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody class="body">
              {currency?.map((element) => (
                <TableRow key={element.ccy}>
                  <TableCell
                    component="th"
                    scope="row"
                    align="left"
                    class="currency"
                  >
                    {element.ccy}
                  </TableCell>
                  <TableCell align="center" class="buy">
                    {Math.floor(element.buy * 100) / 100}
                  </TableCell>
                  <TableCell align="center" class="sell">
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
