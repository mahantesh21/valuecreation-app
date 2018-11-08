import React, { Component } from 'react';
import {Line} from 'react-chartjs-2';


class LineGraph extends Component{
  
  render() {
    return (
      <div style={{ textAlign:'center'}}>
        <h2>Chart Title </h2>
        <Line data={this.props.data} />
      </div>
    );
  };

}
  
export default LineGraph;