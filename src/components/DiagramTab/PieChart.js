import React, { PureComponent } from "react";
import { PieChart, Pie, Cell} from "recharts";
import s from './diagramm.module.scss'

class Chart extends PureComponent {

  sumIncome=this.props.sumIncome[1].money  //  сумма на балансе пользователя в центре диаграммы

   renderIncomeLabel = ({ cx, cy }) => {

    const x = cx;
    const y = cy;
  
    return (
      <text x={x} y={y} fill="black" textAnchor={'middle'} dominantBaseline="central">
        &#8372; {this.sumIncome}
      </text>
    );
  };

  render() {
    return (
      <div>
        <h2 className={s.pieHeader}>Статистика</h2>
        <PieChart width={350} height={380} onMouseEnter={this.onPieEnter}>
          <Pie
            data={this.props.data}
            cx={180}
            cy={200}
            innerRadius={110}
            outerRadius={160}
            paddingAngle={0}
            dataKey="value"
            className={s.pie}
            labelLine={false}
            label={this.renderIncomeLabel}
          >
            {this.props.data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={this.props.colors[index % this.props.colors.length]}
              />
            ))}
          </Pie>
        </PieChart>
      </div>
    );
  }
}

export default Chart;
