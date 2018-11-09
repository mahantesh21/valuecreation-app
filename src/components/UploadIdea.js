import React, {Component} from 'react';


class UploadIdea extends Component {
    render() {
        return (
            <div className="innerContainer" style={{ flex:2 }}>
                <h3>Idea Upload </h3> 
               <div className="formField">
                   <label>Upload attachment: </label>
                   <input type="file"/>
               </div>
               <div className="formField">
                   <label>Upload second attachment: </label>
                   <input type="file"/>
               </div>
               <div className="formField">
                   <label>Upload third attachment: </label>
                   <input type="file"/>
               </div>
            </div>
        )
    }
}
export default UploadIdea;