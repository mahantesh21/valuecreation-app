import React, {Component} from 'react';
import Chart from '../components/Chart';

class ProgressGraph extends Component {
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
            labels: ['Quarter1', 'Quarter2', 'Quarter3', 'Quarter4'],
            datasets:[
              {
                label:'Automation',
                data:[
                  10,
                  15,
                  10,
                  8,
                  30
                ],
                backgroundColor:[
                    'rgba(71, 103, 165, 0.8)',
                    'rgba(71, 103, 165, 0.8)',
                    'rgba(71, 103, 165, 0.8)',
                    'rgba(71, 103, 165, 0.8)'
                ]
              },
              {
                label:'Innovation',
                data:[
                  5,
                  5,
                  20,
                  5,
                  30
                ],
                backgroundColor:[
                    'rgba(255, 127, 0, 0.8)',
                    'rgba(255, 127, 0, 0.8)',
                    'rgba(255, 127, 0, 0.8)',
                    'rgba(255, 127, 0, 0.8)'
                ]
              },
              {
                label:'Optimisation',
                data:[
                  2,
                  10,
                  2,
                  7,
                  30
                ],
                backgroundColor:[
                    'rgba(191, 191, 191, 0.9)',
                    'rgba(191, 191, 191, 0.9)',
                    'rgba(191, 191, 191, 0.9)',
                    'rgba(191, 191, 191, 0.9)'  
                ]
              }
            ]
          }
        });
      }
    render() {
       
        return (
            <div className="panel-body PrgressGraph" style={{ flex:2, flexDirection:"row" }}>
               <div> 
                 <Chart chartData={this.state.chartData}  legendPosition="right"/>
            </div>
         </div>
        )
    }
}
export default ProgressGraph;