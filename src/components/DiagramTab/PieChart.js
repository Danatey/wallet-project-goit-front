import React, { PureComponent } from "react";
import { PieChart, Pie, Cell} from "recharts";
import s from './diagramm.module.css'

class Chart extends PureComponent {
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
            // fill="#333"
            paddingAngle={0}
            dataKey="value"
            className={s.pie}
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
