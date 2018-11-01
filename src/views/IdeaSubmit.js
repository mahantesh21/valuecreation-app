import React, {Component} from 'react';
import  '../assets/css/IdeaSubmit.css';
import IdeaClassfication from '../components/IdeaClassification';
import IdeaDescription from '../components/IdeaDescription';
import UploadIdea from '../components/UploadIdea';
class IdeaSubmit extends Component {
    render() {
        return (
            <div className="header">
                <h2>Submit an Idea</h2> 
               <div className="Main" >
                <IdeaClassfication/>
                <IdeaDescription/>
                <UploadIdea/>
               </div>
            </div>
        )
    }
}
export default IdeaSubmit;