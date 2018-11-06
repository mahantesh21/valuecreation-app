import React, { Component } from 'react';
import {Line} from 'react-chartjs-2';

const data = {
  labels: ['Cat 1', 'Cat 2', 'Category 3', 'Category 4'],

  datasets: [
      {
        label: 'Chart Title',
        fill: false,
        lineTension: 0.1,
        backgroundColor: 
        
          'rgba(71, 103, 165, 0.8)',
    
        borderColor: 'rgba(71, 103, 165, 0.8)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(75,192,192,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [10, 8, 4, 8, 12]
      },
      {
        label: 'Chart Title',
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgba(255, 127, 0, 0.8)',
        borderColor: 'rgba(255, 127, 0, 0.8)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(255, 127, 0, 0.8)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(255, 127, 0, 0.8)',
        pointHoverBorderColor: 'rgba(255, 127, 0, 0.8)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [8, 1, 5, 6, 8]
      },
      {
        label: 'Chart Title',
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgba(191, 191, 191, 0.9)',
        borderColor: 'rgba(191, 191, 191, 0.9)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(191, 191, 191, 0.9)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(191, 191, 191, 0.9)',
        pointHoverBorderColor: 'rgba(191, 191, 191, 0.9)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [0, 2, 3, 9, 12]
      }
    ]
}

class LineExample extends Component{
  
  render() {
    return (
      <div style={{flex:'5'}}>
        <h2>Line Example</h2>
        <Line data={data} />
      </div>
    );
  };

}
  
export default LineExample;