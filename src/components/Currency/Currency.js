import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
} from "@material-ui/core";
import { useMediaQuery } from "react-responsive";
import "./Currency.scss";
// import fetch from "../"

const tableStyles = makeStyles({
  table: {
    minWidth: 280,
    maxWidth: 350,
    maxHeight: 347,
    borderRadius: 30,
    background: "4A56E2",
  },
  head: {
    background: "FFFFFF",
    opacity: 0.2,
    borderRadius: "30px 30px 0px 0px",
  },
  header: {
    fontFamily: "Circe, sans-serif",
    fontSize: 18,
    fontWeight: 700,
    paddingTop: 11,
    paddingBottom: 12,
    color: "FFFFFF",
  },
  // body:{},
  currency: {
    fontFamily: "Circe, sans-serif",
    fontSize: 16,
    fontWeight: 400,
    paddingTop: 10,
    paddingBottom: 10,
    color: "FFFFFF",
  },
  buy: {
    fontFamily: "Circe, sans-serif",
    fontSize: 16,
    fontWeight: 400,
    color: "FFFFFF",
  },
  sell: {
    fontFamily: "Circe, sans-serif",
    fontSize: 16,
    fontWeight: 400,
    color: "FFFFFF",
  },
});

function Currency() {
  const isTabletOrDesktop = useMediaQuery({ minWidth: 1280 });

  return (
    <>
      <div>
        <TableContainer
          class="table"
          width={isTabletOrDesktop ? 350 : 280}
          height={174}
        >
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
              <TableRow>
                <TableCell align="left" class="currency"></TableCell>
                <TableCell align="center" class="buy"></TableCell>
                <TableCell align="center" class="sell"></TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  );
}

export default Currency;
