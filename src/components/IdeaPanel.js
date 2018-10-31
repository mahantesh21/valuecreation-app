import React, {Component} from 'react';
import '../assets/css/Dashboard.css'

class IdeaPanel extends Component {
    render() {
        return (
            <div className="panel-body">
                <h2>Your Ideas</h2>
                <div className="flex-row">
                   <div>Submitted: </div>
                   <div>Waiting for Approval: </div>
                   <div>Approved: </div>
                   <div>Implemented: </div>
                   <div>In Progress: </div>
                </div>
            </div>
        )
    }
}
export default IdeaPanel;