import React, {Component} from 'react';

import logo from '../assets/images/info-icon.png';


class IdeaClassfiication extends Component {
    state = {
        selectedOption: null,
        options: [
            {
                name: 'selectbox1',
                value: null,
                percentage: 0,
                isSelected: false,
                isActive: true
            },
            {
                name: 'selectbox2',
                value: null,
                percentage: 0,
                isSelected: false,
                isActive: false
            },
            {
                name: 'selectbox3',
                value: null,
                percentage: 0,
                isSelected: false,
                isActive: false
            }
        ],
        optionsLeft: [ 'Optimisation', 'Automation', 'Innovation' ],
        toggleSecond: true,
        toggleThird: true,
        lastOption: null,
        feedback: 'Please Enter percentage between 1 to 100',
        displayToggle: 'none'
    }
    handleChange = (e, option) => {
        const options = this.state.options;
        const selectedOption = e.target.value;

        let optionsLeft = this.state.optionsLeft;
        const index = options.indexOf(option);

        options[index].value = selectedOption;
        options[index].isSelected = true;
        optionsLeft = optionsLeft.filter(opt => opt !== selectedOption);

        if (optionsLeft.length === 2) {
            options[1].isActive = true
        }

        if (optionsLeft.length === 1) {
            options[2].isActive = true
        }

        this.setState({ options, optionsLeft });
    }

    validatePercentage = (e, option) => {
       const options = this.state.options;
       let displayToggle = 'none';
       options.find(opt => opt.value === option.value).percentage = e.target.value;

       for (let i = 0; i < options.length; i++) {
           if (options[i].percentage < 0 || options[i].percentage > 100) {
               displayToggle = 'block';
               break;
           } else {
            displayToggle = 'none';
           }
       }

       this.setState({ options, displayToggle});
    }

    render() {
        const { options, optionsLeft, displayToggle, feedback} = this.state;
        return (
            <div className="innerContainer" style={{ flex:2 }}>
                <h4 style={{ color: "black" }}>Idea Classfication</h4> 
                <div className="ideaClassification" style={{ width: '100%' }}>
                    <select className="selectbox" style={{ width: '100%' }}>
                        <option disabled selected value> -- select -- </option>
                        {optionsLeft.map(option => {
                            return (
                                <option>{option}</option>
                            )
                        })}
                    </select>
                </div>
                <h4 style={{ color: "black" }}>Account</h4>
                <div className="ideaClassification" style={{ width: '100%' }}>
                    <select className="selectbox" style={{ width: '100%' }}>
                        <option disabled selected value> -- select -- </option>
                        <option>Telefonica</option>
                        <option>GiffGaff</option>
                        <option>EE</option>
                    </select>
                </div>
                <h4 style={{ color: "black" }}>Hardware requirements</h4> 
                <textarea className="ideaClassification" placeholder="100 words or less, should not be generic" />
                <h4 style={{ color: "black" }}>Software requirements</h4> 
                <textarea className="ideaClassification" placeholder="100 words or less, should not be generic" />
            </div>
        )
    }
}
export default IdeaClassfiication;