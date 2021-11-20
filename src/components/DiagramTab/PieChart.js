import React, { PureComponent } from "react";
import { ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import s from "./diagramm.module.scss";

class Chart extends PureComponent {
  sumIncome = this.props.sumIncome[1].money; //  сумма на балансе пользователя в центре диаграммы
  renderIncomeLabel = ({ cx, cy }) => {
    const x = cx;
    const y = cy;

    return (
      <text
        x={x}
        y={y}
        fill="black"
        textAnchor={"middle"}
        dominantBaseline="central"
      >
        &#8372; {this.sumIncome}
      </text>
    );
  };

  render() {
    return (
      <div>
        <h2 className={s.pieHeader}>Статистика</h2>
        <div className={s.pieStyle} /* style={{ width: 300, height: 300 }} */>
          <ResponsiveContainer>
            <PieChart>
              <Pie
                data={this.props.data}
                innerRadius="70%"
                outerRadius="100%"
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
          </ResponsiveContainer>
        </div>
        {/* </PieChart> */}
      </div>
    );
  }
}

export default Chart;
