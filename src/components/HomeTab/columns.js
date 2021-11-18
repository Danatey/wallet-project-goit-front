// import { format } from 'date-fns'

export const COLUMNS = [
  {
    Header: "Дата",

    accessor: "date",
    disableFilters: true,
    sticky: "centre",
  },
  {
    Header: "Тип",
    accessor: "type",
    sticky: "centre",
  },
  {
    Header: "Категория",
    accessor: "category",
    sticky: "centre",
  },
  {
    Header: "Коментарий",

    accessor: "comment",
    // Cell: ({ value }) => {
    //   return format(new Date(value), 'dd/MM/yyyy')
    // }
  },
  {
    Header: "Сумма",
    accessor: "sum",
  },
  {
    Header: "Баланс",
    accessor: "balance",
  },
];
