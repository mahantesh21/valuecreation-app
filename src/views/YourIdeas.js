import React, {Component} from 'react';
import  '../assets/css/valueAdds.css';
import IdeaFilter from '../components/IdeaFilter';
import ValueAddsGraph from '../components/ValueAddsGraph';
import ValueAddsList from '../components/ValueAddsList';

class YourIdeas extends Component {
    render() {
        return (
            <div>
                <div className="header">
                     <h2>My Idea</h2> 
               </div> 
               <div style={{ display: 'flex' }}>
                    <IdeaFilter/>
                    <ValueAddsGraph/>    
                  
               </div>

               <ValueAddsList/>

            </div>
        )
    }
}
export default YourIdeas;