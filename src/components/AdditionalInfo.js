import React, {Component} from 'react';

import '../assets/css/AdditionalInfo.css';

class AdditionalInfo extends Component {
    render() {
        return (
            <div className="innerContainer" style={{ flex:3 }}>
                <h2>Additional Information</h2>
                <div className="additionalInfo">
                    <label>Idea for Interval / Client: </label>
                    <select className="selectbox">
                        <option disabled selected value> -- select -- </option>
                        <option>Interval</option>
                        <option>Client</option>
                    </select>
                </div>
                <div className="additionalInfo">
                    <label>Generic / Account Specific: </label>
                    <select className="selectbox">
                        <option disabled selected value> -- select -- </option>
                        <option>Generic</option>
                        <option>Account Specfic</option>
                    </select>
                </div>
                <div className="additionalInfo">
                    <label>Location: </label>
                    <select className="selectbox">
                        <option disabled selected value> -- select -- </option>
                        <option>UK</option>
                        <option>Japan</option>
                        <option>India</option>
                        <option>Europe</option>
                    </select>
                </div>
                <div className="additionalInfo">
                    <label>Idea Theme: </label>
                    <select className="selectbox">
                        <option disabled selected value> -- select -- </option>
                        <option>Example</option>
                    </select>
                </div>
                <div className="additionalInfo">
                    <label>Cost Benefit Done: </label>
                    <select className="selectbox">
                        <option disabled selected value> -- select -- </option>
                        <option>Example</option>
                    </select>
                </div>
            </div>
        )
    }
}
export default AdditionalInfo;