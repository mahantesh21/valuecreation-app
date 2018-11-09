import React, {Component} from 'react';
import Select from 'react-select'; 

const options = [
    { value: 'Optimisation', label: 'Optimisation' },
    { value: 'Automation', label: 'Automation' },
    { value: 'Innovation', label: 'Innovation' }
  ];
class IdeaClassfiication extends Component {
    state = {
        selectedOption: null,
      }
    handleChange = (selectedOption) => {
        this.setState({ selectedOption });
        console.log(`Option selected:`, selectedOption);
    }
    render() {
        const { selectedOption } = this.state;
        return (
            <div className="innerContainer" style={{ flex:2 }}>
                <h3>Idea Classfication </h3> 
                <div>   
                   <Select
                        value={selectedOption}
                        onChange={this.handleChange}
                        options={options}
                    />
                    <div className="formField">
                        <label>Optimisation %: <input /></label>
                    </div>
                    <div className="formField">
                        <label>Automation %: <input /></label>
                    </div>
                    <div className="formField">
                        <label>Innovation %: <input /></label>
                    </div>
                </div>
            </div>
        )
    }
}
export default IdeaClassfiication;