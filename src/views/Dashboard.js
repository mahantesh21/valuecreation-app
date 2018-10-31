import React, {Component} from 'react'
import ProgressGraph from '../components/ProgressGraph';
import IdeaPanel from '../components/IdeaPanel';
import VCFGraph from '../components/VCFGraph';
class Dashboard extends Component {
    render() {
        return (
            <div>
                <div>
                <h1>Value Creation Dashboard</h1> 
                </div>
                
                    <ProgressGraph/>
                    <VCFGraph/>
                    <IdeaPanel/>
                
            </div>
        )
    }
}
export default Dashboard;