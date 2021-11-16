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

// export const GROUPED_COLUMNS = [
//   {
//     Header: "Дата",

//     accessor: "date",
//   },
//   {
//     Header: "Тип",
//     accessor: "type",
//     sticky: "left",

//     columns: [
//       {
//         Header: "Дата",
//         accessor: "date",
//       },
//       {
//         Header: "тип",
//         accessor: "type",
//       },
//     ],
//   },
//   {
//     Header: " ",

//     columns: [
//       {
//         Header: " ",
//         accessor: "",
//       },
//       {
//         Header: "",
//         accessor: "",
//       },
//       {
//         Header: "",
//         accessor: "",
//       },
//     ],
//   },
// ];
