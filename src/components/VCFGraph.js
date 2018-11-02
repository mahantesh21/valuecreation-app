import React, {Component} from 'react';
//import PieChart from 'react-simple-pie-chart';
import PieChart from '../components/PieChart';
class VCFGraph extends Component {
 
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
            datasets:[
              {
                label:'VCF',
                data:[
                  15,
                  15,
                  20
                ],
                backgroundColor:[
                  'rgba(71, 103, 165, 0.8)',
                  'rgba(255, 127, 0, 0.8)',
                  'rgba(191, 191, 191, 0.9)'
                ]
              }
            ]
          }
        });
      }
      render(){
          return(
            <div className="panel-body piChartPnl" style={{ flex:1.5 }}>
            <PieChart chartData={this.state.chartData} location="Massachusetts" legendPosition="right"/>
            </div>
          )
      }
    // render() {
    //     return (
    //         <div className="panel-body piChartPnl" style={{ flex:1 }}>
    //             <div style={{ display:'flex'}}>
    //                 <div style={{ flex:4}}>
    //                     <h3> VCF </h3>
    //                 </div>
    //                 <div className="ChartDesc" style={{ flex:2 }}>
    //                     <div style={{ display:"flex" }}><div className="Auto"></div><div className="chartName">Automation</div></div>
    //                     <div style={{ display:"flex"  }}><div className="Inno"></div><div className="chartName">Innovation</div></div>
    //                     <div style={{ display:"flex"  }}><div className="Opti"></div><div className="chartName">Optimisation</div></div>
    //                 </div>
    //             </div>  
    //             <div style={{ display:'flex'}}>
    //                      <div style={{ flex:1}}></div>
    //                       <div className="PieChart" style={{ flex:1}}>
    //                         <PieChart
    //                             slices={[
    //                                 {
    //                                 color: '#D3D3D3',
    //                                 value: 20,
    //                                 },
    //                                 {
    //                                 color: '#F9812A',
    //                                 value: 15,
    //                                 },
    //                                 {
    //                                 color: '#4767a5',
    //                                 value: 15,
    //                                 }
                                    
    //                             ]}
    //                         />
    //                     </div>
    //                     <div style={{ flex:1}}></div>
    //             </div>                 
    //         </div>
    //     )
    // }
}
export default VCFGraph;