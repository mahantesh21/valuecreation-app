import React, {Component} from 'react';
import UploadIdea from './UploadIdea';


class IdeaDescription extends Component {

    onSubmit = () => {
        alert("Are you sure you want to submit this idea")
    }
    render() {
        return (
            <div style={{ flex:3 }}>
            <div className="formField title">
                <label>Title: </label>
                <input  style={{ width: "86%" }}/>
            </div>
                <div className="innerContainer borderLine">
                    <div className="ideaInitialSection">
                        <div className="problemSection">
                            <span>Problem: </span> 
                            <textarea placeholder="100 words or less, should not be generic"  rows={8} />
                        </div>
                        <div className="solutionSection">
                            <span>Solution: </span>
                            <textarea placeholder="100 words or less, should not be generic"  rows={8} />
                        </div>
                        <div className="benefitSection">
                            <span>Benefit: </span>
                            <textarea placeholder="100 words or less, should not be generic"  rows={8} />
                        </div>
                    </div>
                    <div className="ideaDescSection">
                        <span>Detail Description: </span>
                        <textarea placeholder="Describe your idea in 1000 words or less" rows={8} />
                    </div>
                    <UploadIdea></UploadIdea>
                    <div className="btnSubmit" style={{flexDirection:"row"}}>
                        <button onClick={this.onSubmit}>Submit</button>
                        <button>Save</button>
                        <button>Cancel</button>
                    </div>
                </div>
            </div>
        )
    }
}
export default IdeaDescription;