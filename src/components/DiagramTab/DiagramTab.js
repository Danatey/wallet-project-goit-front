import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import TableStats from "./TableStats";
import PieChart from "./PieChart";
import s from "./diagramm.module.scss";
import { transactionsSelectors } from "../../redux/transactions/";
import { authSelectors, authOperations } from "../../redux/auth/";

const colors = [
  "#FED057",
  "#FFD8D0",
  "#FD9498",
  "#C5BAFF",
  "#6E78E8",
  "#4A56E2",
  "#81E1FF",
  "#24CCA7",
  "#00AD84",
];

export const DiagramTab = () => {
  const dispatch = useDispatch();
  const balance = useSelector(authSelectors.getBalance);
  const stats = useSelector(transactionsSelectors.getCategoriesStats);

  useEffect(() => {
    dispatch(authOperations.getCurrentUser());
  }, [dispatch]);

  return (
    <>
      <div className={s.statsSheet}>
        <PieChart
          balance={balance}
          data={stats?.data ? stats.data : []}
          colors={colors}
        />
        <TableStats colors={colors} />
      </div>
    </>
  );
};

export default DiagramTab;
