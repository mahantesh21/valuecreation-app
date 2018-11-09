import React, {Component} from 'react';


class IdeaDescription extends Component {
    render() {
        return (
            <div className="innerContainer" style={{ flex:3 }}>
                <h3>Idea Description </h3> 
               <div className="ideaInitialSection">
                   <div className="problemSection">
                   <div className="label">Problem: </div> 
                   <textarea placeholder="100 words or less, should not be generic"  rows={8} />
                   </div>
                   <div className="solutionSection">
                   <div className="label">Solution: </div>
                   <textarea placeholder="100 words or less, should not be generic"  rows={8} />
                   </div>
                   <div className="benefitSection">
                   <div className="label">Benefit: </div>
                   <textarea placeholder="100 words or less, should not be generic"  rows={8} />
                   </div>
               </div>
               <div className="ideaDescSection">
                 <textarea placeholder="Describe your idea in 1000 words or less" rows={8} />
               </div>
               <div className="btnSubmit" style={{flexDirection:"row"}}>
                   <button>Submit to Account</button>
                   <button>Submit to Practice</button>
                   <button>Submit to Global</button>
               </div>

            </div>
        )
    }
}
export default IdeaDescription;