import React, { useState, useEffect } from "react";
import Select from "react-select";
import DiagramTab from "./DiagramTab";
import { format } from "date-fns";
import "./diagramPage.scss";
import { selectedStyles } from "./SelectedStyles";

const currentMonth = new Date().getMonth() + 1;
const months = Array.from({ length: 12 }, (item, i) => {
  return format(new Date(0, i), "LLLL");
});

const monthOptions = Array(12)
  .fill(null)
  .map((item, index) => ({ value: index + 1, label: months[index] }));

const currentYear = new Date().getFullYear();
const years = [];
for (let i = currentYear; i >= 1940; i--) {
  years.push({ value: i, label: i.toString() });
}

function DiagramPage() {
  const [date, setDate] = useState({
    month: currentMonth,
    year: currentYear,
  });

  const updateDate = (name, value) => {
    setDate((prev) => ({ ...prev, [name]: value }));
  };

  // раскоментировать после гот. редакса

  async function updateTransactionForPeriod() {
    try {
      // await dispatch(GetTransactionDate(date.month, date.year)).unwrap()
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    updateTransactionForPeriod();
    console.log(date);
  }, [date]);

  return (
    <>
      <div className="selectContainer">
        <div className="input-select-container">
          <Select
            styles={selectedStyles}
            options={monthOptions}
            placeholder="Месяц"
            onChange={(option) => {
              updateDate("month", option.value);
            }}
            isSearchable={false}
            defaultValue={monthOptions.find(
              (month) => month.value === date.month
            )}
          />
        </div>
        <div className="input-select-container">
          <Select
            styles={selectedStyles}
            options={years}
            placeholder="Год"
            onChange={(option) => {
              updateDate("year", option.value);
            }}
            isSearchable={false}
            defaultValue={years.find((year) => year.value === date.year)}
          />
        </div>
      </div>
      <DiagramTab />
    </>
  );
}

export default DiagramPage;
