import React, { PureComponent } from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';

class Chart extends PureComponent  {
     

   render() {
    
      return (

          <div>
          <PieChart width={350} height={380} onMouseEnter={this.onPieEnter}>
            <Pie
              data={this.props.data}
              cx={180}
              cy={200}
              innerRadius={100}
              outerRadius={160}
              // fill="#333"
              paddingAngle={0}
              dataKey="value"
            >
             {this.props.data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={this.props.colors[index % this.props.colors.length]} />
              ))} 
            </Pie>
          </PieChart>
        </div> 
  
      );
    } 
  }

export default Chart;