import React, { useEffect, useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import { useMediaQuery } from '@material-ui/core';
import {
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
} from "@material-ui/core";
import "./Currency.scss";
import wave from "../../images/svg/wave.svg";
import fetchCurrency from "../../assets/API/fetchCurrency/fetchCurrency";

const useStyles = makeStyles({
  currency_sidebar: {
    marginLeft: 'auto',
    marginRight: 'auto',
    width: 'fit-content',
  },

  currency_table: {
    minWidth: '280px',
    maxWidth: '348px',
    maxHeight: '347px',
    height: '174px',
    borderRadius: '30px',
    background: '#4a56e2',

  ['@media (min-width:1280px)']: { // eslint-disable-line no-useless-computed-key
    width: '348px',
    height: '347px',
  },
},

  currency_head: {
    borderRadius: '30px 30px 0px 0px',
  },

  currency_header: {
    fontFamily: 'Circe, sans-serif',
    fontSize: '18px',
    fontWeight: '700',
    paddingTop: '11px',
    paddingBottom: '12px',
    color: '#ffffff',
    backgroundColor: '#6e78e8',
    alignItems: 'center',
    borderBottom: '0px',

    ['@media (min-width:768px)']: { // eslint-disable-line no-useless-computed-key
      paddingTop: '17px',
      paddingBottom: '16px',
    },
  },

  // currency_body: {
  //   backgroundImage: '{wave}',
  // },


  currency_name: {
  fontFamily: 'Circe',
  fontSize: '16px',
  fontWeight: '400',
  paddingTop: '10px',
  paddingBottom: '10px',
  color: '#ffffff',
  borderBottom: '0px',
  },

  currency_item: {
  fontFamily: 'Circe',
  fontSize: '16px',
  fontWeight: '400',
  color: '#ffffff',
  borderBottom: '0px',
  }
})

function Currency() {
  const [currency, setCurrency] = useState([]);
  const s = useStyles();

  useEffect(() => {
    // (1) определить в области обратного вызова эффекта
    const fetch = async () => {
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
        <div className={s.currency_sidebar}>
        <TableContainer className={s.currency_table}>
          <Table size="small">
            <TableHead className={s.currency_head}>
              <TableRow className={s.currency_head_row}>
                <TableCell className={s.currency_header}>Валюта</TableCell>
                <TableCell align="center" className={s.currency_header}>
                  Покупка
                </TableCell>
                <TableCell align="center" className={s.currency_header}>
                  Продажа
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody className={s.currency_body}>
              {currency?.map((element) => (
                <TableRow key={element.ccy}>
                  <TableCell
                    component="th"
                    scope="row"
                    align="left"
                    className={s.currency_name}
                  >
                    {element.ccy}
                  </TableCell>
                  <TableCell align="center" className={s.currency_item}>
                    {Math.floor(element.buy * 100) / 100}
                  </TableCell>
                  <TableCell align="center" className={s.currency_item}>
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
