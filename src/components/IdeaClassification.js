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
        options: [ 'Optimisation', 'Automation', 'Innovation' ],
        optionsLeft: [ 'Optimisation', 'Automation', 'Innovation' ],
        toggleSecond: true,
        toggleThird: true
      }
    handleChange = (e) => {
        const selectedOption = e.target.value;
        let optionsLeft = this.state.optionsLeft;

        optionsLeft = optionsLeft.filter(option => option !== selectedOption)

        if (optionsLeft.length == 2) {
            this.setState({ optionsLeft });
            this.setState({ toggleSecond: false })
        }

        if (optionsLeft.length == 1) {
            this.setState({ selectedOption })
            this.setState({ toggleThird: false })
        }
        console.log("optionsLeft", optionsLeft, selectedOption)
    }
    render() {
        const { toggleSecond, toggleThird, selectedOption } = this.state;
        return (
            <div className="innerContainer" style={{ flex:2 }}>
                <h3>Idea Classfication </h3> 
                <div className="ideaClassification">   
                    <select className="selectbox" onChange={(e) => this.handleChange(e)}>
                        <option disabled selected value> -- select -- </option>
                        {this.state.options.map(option => <option value={option}>{option}</option>)}
                    </select>
                    <input type="text" />
                    <label> %</label>
                </div>
                <div className="ideaClassification">   
                    <select className="selectbox" disabled={toggleSecond} onChange={(e) => this.handleChange(e)}>
                        <option disabled selected value> -- select -- </option>
                        {this.state.optionsLeft.map(option => <option value={option}>{option}</option>)}
                    </select>
                    <input type="text" />
                    <label> %</label>
                </div>
                <div className="ideaClassification">   
                    <select className="selectbox" disabled={toggleThird}>
                        <option disabled selected value> -- select -- </option>
                        {this.state.optionsLeft.map(option => <option value={option}>{option}</option>)}
                    </select>
                    <input type="text" />
                    <label> %</label>
                </div>
            </div>
        )
    }
}
export default IdeaClassfiication;