import React, {Component} from 'react';
import  '../assets/css/valueAdds.css';
import IdeaFilter from '../components/IdeaFilter';
import ValueAddsGraph from '../components/ValueAddsGraph';
class IdeaSubmit extends Component {
    render() {
        return (
            <div>
                <div className="header">
                     <h2>Value Additions Dashboard</h2> 
               </div> 
               <div style={{ display: 'flex' }}>
                    <IdeaFilter/>
                    <ValueAddsGraph/>     
               </div>
            </div>
        )
    }
}
export default IdeaSubmit;