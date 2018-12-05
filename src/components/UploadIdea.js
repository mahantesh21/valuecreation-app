import React, {Component} from 'react';


class UploadIdea extends Component {
    render() {
        return (
            <div className="innerContainer" style={{ flex:2 }}>
               <div className="formField">
                    <label className="btn btn-default btn-file">Upload attachment: 
                        <input className="attachment" type="file" style={{ display: 'none' }} multiple="multiple"/>
                   </label>
               </div>
            </div>
        )
    }
}
export default UploadIdea;