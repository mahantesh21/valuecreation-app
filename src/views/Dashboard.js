import React, {Component} from 'react'
import ProgressGraph from '../components/ProgressGraph';
import IdeaPanel from '../components/IdeaPanel';
import VCFGraph from '../components/VCFGraph';
import IdeaStatus from '../data/IdeasStatus.json';
import VCFGraphData from '../data/VCFData.json';
import  '../assets/css/Dashboard.css';
import NavLink from '../components/NavDashboard';

class Dashboard extends Component {
    state = {
        data: IdeaStatus,
        VCFData:VCFGraphData
    }
    render() {
        return (
            <div>
                <div className="header">
                     <h2>Value Creation Dashboard</h2> 
                </div>
                <div style={{ display: 'flex' }}>
                    <ProgressGraph/>
                    <VCFGraph VCFData={this.state.VCFData}/>
                    <IdeaPanel  data={this.state.data}/>
                </div>           
                <div style={{ display: 'flex' }}>
                    <NavLink />
                </div>
            </div>
        )
    }
}
export default Dashboard;