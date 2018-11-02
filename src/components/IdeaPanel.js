import React, {Component} from 'react';
import '../assets/css/Dashboard.css';

class IdeaPanel extends Component {
    render() {
        return (
            <div className="panel-body" style={{ flex:1 }}>
                <h3>Your Ideas</h3>
                <div className="flex-row">
                   <div>Submitted: {this.props.data.Submitted}</div>
                   <div>Waiting for Approval: {this.props.data.WaitingForApproval}</div>
                   <div>Approved: {this.props.data.Approved}</div>
                   <div>Implemented: {this.props.data.Implemented}</div>
                   <div>In Progress: {this.props.data.Progress}</div>
                </div>
            </div>
        )
    }
}
export default IdeaPanel;