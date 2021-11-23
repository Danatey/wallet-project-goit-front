import React, { useState, useEffect } from "react";
import Select from "react-select";
import { format } from "date-fns";
import { ru } from "date-fns/locale";

import "./tableFilters.scss";
import { selectStyles } from "./SelectStyles";
import { useDispatch } from "react-redux";
import { getTransactionDate } from "../../redux/transactions/transactions-operations";

const currentMonth = new Date().getMonth() + 1;
const months = Array.from({ length: 12 }, (item, i) => {
  return format(new Date(0, i), "LLLL", {
    locale: ru,
  });
});

const monthOptions = Array(12)
  .fill(null)
  .map((item, index) => ({ value: index + 1, label: months[index] }));

const currentYear = new Date().getFullYear();
const years = [];
for (let i = currentYear; i >= 1940; i--) {
  years.push({ value: i, label: i.toString() });
}

function TableFilters() {
  const [date, setDate] = useState({
    month: currentMonth,
    year: currentYear,
  });

  const dispatch = useDispatch();

  const updateDate = (name, value) => {
    setDate((prev) => ({ ...prev, [name]: value }));
  };

  // раскоментировать после гот. редакса

  async function updateTransactionForPeriod() {
    try {
      await dispatch(
        getTransactionDate({ month: date.month, year: date.year })
      ).unwrap();
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    updateTransactionForPeriod();
    // console.log(date)
  }, [date]);

  return (
    <div className="selectContainer">
      <Select
        styles={selectStyles}
        options={monthOptions}
        placeholder="Месяц"
        onChange={(option) => {
          updateDate("month", option.value);
        }}
        isSearchable={false}
        defaultValue={monthOptions.find((month) => month.value === date.month)}
      />
      <Select
        styles={selectStyles}
        options={years}
        placeholder="Год"
        onChange={(option) => {
          updateDate("year", option.value);
        }}
        isSearchable={false}
        defaultValue={years.find((year) => year.value === date.year)}
      />
    </div>
  );
}

export default TableFilters;
