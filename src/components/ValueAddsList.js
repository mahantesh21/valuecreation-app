import React, {Component} from 'react';
import ReactTable from "react-table";
import 'react-table/react-table.css'
import '../assets/css/valueAdds.css';

class ValueAddsList extends Component {
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
                data : [
                            {
                                idea: '1',
                                problem: 'What is Lorem Ipsum',
                                solution: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
                                benefit:'It is a long established fact that a reader will be distracted by the readable content'
                             },
                             {
                                idea: '2',
                                problem: 'What is Lorem Ipsum',
                                solution: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
                                benefit:'It is a long established fact that a reader will be distracted by the readable content'
                             },
                             {
                                idea: '3',
                                problem: 'What is Lorem Ipsum',
                                solution: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
                                benefit:'It is a long established fact that a reader will be distracted by the readable content'
                             },
                             {
                                idea: '4',
                                problem: 'What is Lorem Ipsum',
                                solution: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
                                benefit:'It is a long established fact that a reader will be distracted by the readable content'
                             }
                             
                        ],
                columns : [
                    {
                        Header: "S.No.",
                        accessor: 'idea'
                    },
                    {
                        Header: 'Problem',
                        accessor: 'problem' // String-based value accessors!
                    }, {
                        Header: 'Solution',
                        accessor: 'solution'
                        
                    }, {
                        Header: 'Benefit', // Required because our accessor is not a string
                        accessor: 'benefit'
                    }] 
            })
        };


    render() {
        return (
            <div  className='react-table'>
                <ReactTable
                    data={this.state.data}
                    columns={this.state.columns}
                    defaultPageSize={10}
                    page={0}
                />
            </div>
        )
    }
}
export default ValueAddsList;