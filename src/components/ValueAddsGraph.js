import React, {Component} from 'react'
import { Line} from 'react-chartjs-2';
import '../assets/css/valueAdds.css';
import LineExample from './Line';


class ValueAddsGraph extends Component{
    constructor(){
        super();
        this.state = {
            chartData:{}
          }
        }    
    
    componentWillMount(){
        this.getChartData();
      }
      getChartData(){
        // Ajax calls here
        this.setState({
          chartData:{
            labels: ['Automation', 'Innovation', 'Optimisation'],
            // datasets:[
            //   {
            //     label:'Chart Title',
            //     data:[
            //       0,
            //       2,
            //       4,
            //       6
            //     ],
            //     backgroundColor:[
            //       'rgba(71, 103, 165, 0.8)',
            //       'rgba(255, 127, 0, 0.8)',
            //       'rgba(191, 191, 191, 0.9)'
            //     ]
            //   }
            // ]
            datasets: [
                {
                  label: 'Chart Title',
                  fill: false,
                  lineTension: 0.1,
                  backgroundColor: 
                  [
                    'rgba(71, 103, 165, 0.8)',
                    'rgba(255, 127, 0, 0.8)',
                    'rgba(191, 191, 191, 0.9)'
                  ],
                  borderColor: 'rgba(75,192,192,1)',
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
                  data: [0, 2, 4, 6, 8]
                }
              ]
          }
        });
      }

    render(){
        return(
            <div className="ValueAddsGraph" style={{ flex:1.5}}>
            <LineExample data={this.props.chartData} />
            </div>
        )
    }
}
export default ValueAddsGraph;