import React, {Component} from 'react';
import PieChart from 'react-simple-pie-chart';

class VCFGraph extends Component {
 
    render() {
        return (
            <div className="panel-body piChartPnl" style={{ flex:1 }}>
                <div style={{ display:'flex'}}>
                    <div style={{ flex:4}}>
                        <h2> VCF </h2>
                    </div>
                    <div className="ChartDesc" style={{ flex:2 }}>
                        <div style={{ display:"flex" }}><div className="Auto"></div><span className="chartName">Automation</span></div>
                        <div style={{ display:"flex"  }}><div className="Inno"></div><span className="chartName">Innovation</span></div>
                        <div style={{ display:"flex"  }}><div className="Opti"></div><span className="chartName">Optimisation</span></div>
                    </div>
                </div>  
                <div style={{ display:'flex'}}>
                         <div style={{ flex:1}}></div>
                          <div className="PieChart" style={{ flex:1}}>
                            <PieChart
                                slices={[
                                    {
                                    color: '#D3D3D3',
                                    value: 20,
                                    },
                                    {
                                    color: '#F9812A',
                                    value: 15,
                                    },
                                    {
                                    color: '#4767a5',
                                    value: 15,
                                    }
                                    
                                ]}
                            />
                        </div>
                        <div style={{ flex:1}}></div>
                </div>                 
            </div>
        )
    }
}
export default VCFGraph;