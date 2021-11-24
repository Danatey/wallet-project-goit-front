import React, { useEffect, useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
// import { useMediaQuery } from '@material-ui/core';
import {
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
} from "@material-ui/core";
import "./Currency.scss";
import waveMobile from "../../images/svg/wave-mobile.svg";
import waveTablet from "../../images/svg/wave-tablet.svg";
import waveDesktop from "../../images/svg/wave-desktop.svg";
import fetchCurrency from "../../assets/API/fetchCurrency/fetchCurrency";

const useStyles = makeStyles({
  currency_sidebar: {
    marginLeft: 'auto',
    marginRight: 'auto',
    minWidth: 'auto',
    minHeight: 'auto',
    overflow: 'auto',
    // width: 'fit-content',
    // blockSize: 'fit-content',
    // display: 'flex',
    // justifyContent: 'center',
    // alignItems: 'stretch',
    // alignItems: 'flex-start',

    // ['@media (min-width:767px) and  (max-width:1279px)']: { // eslint-disable-line no-useless-computed-key
    //   display: 'flex',
    //   justifyContent: 'center',
    //   alignItems: 'center',
    //   alignItems: 'flex-start',
  
    // },

  },
  
  currency_table_container: {
    marginLeft: 'auto',
    marginRight: 'auto',
      minWidth: '280px',
      maxWidth: '348px',
      maxHeight: '347px',
    borderRadius: '30px',
    background: '#4a56e2',

  ['@media (min-width:1280px)']: { // eslint-disable-line no-useless-computed-key
    width: '348px',
    height: '347px',
  },
},

currency_table: {
  ['@media (max-width:767px)']: { // eslint-disable-line no-useless-computed-key
  width: '280px',
  height: '174px',
  //  width: 'fit-content',
   minWidth: 'auto',
   minHeight: 'auto',
   marginLeft: 'auto',
   marginRight: 'auto',
   overflow: 'hidden',
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

  currency_body: {
    backgroundSize: 'contain',
    backgroundPosition: 'bottom',

    ['@media (max-width:767px)']: { 
      backgroundImage: `url(${waveMobile})`,
    },
    ['@media (min-width:768px) and (max-width:1279px)']: { 
    backgroundImage: `url(${waveTablet})`,
  },
},

currency_bg: {
  display: 'none',
  ['@media (min-width:1280px)']: {
    display: 'block', 
    height: '130px',  
    marginTop: '30px',
      backgroundImage: `url(${waveDesktop})`,
    },
},

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
  },
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
        <TableContainer className={s.currency_table_container}>
          <Table className={s.currency_table} size="small">
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
          <div className={s.currency_bg} >
            </div>
        </TableContainer>
      </div>
    </>
  );
}

export default Currency;
