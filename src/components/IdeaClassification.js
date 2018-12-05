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
                <h3>Idea Classfication </h3> 
                {options.map(opt => {
                    const {isSelected, isActive, percentage} = opt;
                    return (
                        <div className="ideaClassification">   
                            <select className="selectbox" onChange={(e) => this.handleChange(e, opt)} disabled={!isActive} >
                                <option disabled selected value> -- select -- </option>
                                {isSelected ? <option value={opt.value}>{opt.value}</option> :
                                optionsLeft.map(option => <option value={option}>{option}</option>)}
                            </select>
                            <input type="number" value={percentage} 
                                className={ percentage < 0 || percentage > 100 ? 'notValid' : 'valid' }
                                onChange={(e) => this.validatePercentage(e, opt)} disabled={!isSelected} min="1" max="100" />
                            <label> %</label>
                        </div>
                    )
                })}
                
                <div className="feedback" style={{ display: displayToggle }}><span style={{ color: 'red' }}>Error </span><br></br>{feedback}</div>
                <div className="hint"><img style={ { width: '12px', height: '12px' }} src={logo} /> ( Select each classification from dropdown and 
                    enter percentage in their corresponding box )</div>
            </div>
        )
    }
}
export default IdeaClassfiication;