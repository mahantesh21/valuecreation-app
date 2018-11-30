import React, {Component} from 'react';

import logo from '../assets/images/info-icon.png';


class IdeaClassfiication extends Component {
    state = {
        selectedOption: null,
        options: [
            {
                name: 'selectbox1',
                value: null,
                percentage: 0
            },
            {
                name: 'selectbox2',
                value: null,
                percentage: 0
            },
            {
                name: 'selectbox3',
                value: null,
                percentage: 0
            }
        ],
        options: ['Optimisation', 'Automation', 'Innovation'],
        optionsLeft: [ 'Optimisation', 'Automation', 'Innovation' ],
        toggleSecond: true,
        toggleThird: true,
        lastOption: null,
        feedback: 'Enter percentage between 1 to 100',
        displayToggle: 'none'
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
            this.setState({ lastOption: optionsLeft })
            this.setState({ toggleThird: false })
        }
        //console.log("optionsLeft", optionsLeft, selectedOption)
    }

    validatePercentage = (e) => {
        const percentage = e.target.value;
        let displayToggle = percentage > 100 || percentage < 0 ? 'block' : 'none';

        
        this.setState({ displayToggle })
    }

    render() {
        const { toggleSecond, toggleThird, lastOption, displayToggle, feedback} = this.state;
        return (
            <div className="innerContainer" style={{ flex:2 }}>
                <h3>Idea Classfication </h3> 
                <div className="ideaClassification">   
                    <select className="selectbox" onChange={(e) => this.handleChange(e)}>
                        <option disabled selected value> -- select -- </option>
                        {this.state.options.map(option => <option value={option}>{option}</option>)}
                    </select>
                    <input type="text" onInput={this.validatePercentage}/>
                    <label> %</label>
                </div>
                <div className="ideaClassification">   
                    <select className="selectbox" disabled={toggleSecond} onChange={(e) => this.handleChange(e)}>
                        <option disabled selected value> -- select -- </option>
                        {this.state.optionsLeft.map(option => <option value={option}>{option}</option>)}
                    </select>
                    <input type="text" disabled={toggleSecond} onInput={this.validatePercentage}/>
                    <label> %</label>
                </div>
                <div className="ideaClassification">   
                    <select className="selectbox" disabled={toggleThird}>
                        <option disabled selected value> -- select -- </option>
                        <option value={lastOption}>{lastOption}</option>
                    </select>
                    <input type="text" disabled={toggleSecond} onInput={this.validatePercentage}/>
                    <label> %</label>
                </div>
                <div className="feedback" style={{ display: displayToggle }}>{feedback}</div>
                <div className="hint"><img style={ { width: '12px', height: '12px' }} src={logo} /> ( Select each classification from dropdown and 
                    enter percentage in their corresponding box )</div>
            </div>
        )
    }
}
export default IdeaClassfiication;