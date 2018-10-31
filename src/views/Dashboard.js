import React, {Component} from 'react'
import ProgressGraph from '../components/ProgressGraph';
import IdeaPanel from '../components/IdeaPanel';
import VCFGraph from '../components/VCFGraph';
import IdeaStatus from '../data/IdeasStatus.json';
class Dashboard extends Component {
    state = {
        data: IdeaStatus
    }
    render() {
        return (
            <div>
                <div>
                <h2>Value Creation Dashboard</h2> 
                </div>
                <div style={{ display: 'flex' }}>
                    <ProgressGraph/>
                    <VCFGraph/>
                    <IdeaPanel  data={this.state.data}/>
                </div>
                
            </div>
        )
    }
}
export default Dashboard;