import { useSelector } from "react-redux";
import TableStats from "./TableStats";
import PieChart from "./PieChart";
import s from "./diagramm.module.scss";
import { transactionsSelectors } from "../../redux/transactions/";

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
  // const balance = useSelector((state) => state.auth.user?.balance)
  const balance = useSelector(transactionsSelectors.getBalance);
  const stats = useSelector(transactionsSelectors.getCategoriesStats);

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
