import React, {Component} from 'react'
import { Link } from "react-router-dom";
class SignOut extends Component {
    render() {
        return (
            <div>
                <div className="header">
                     <h2>You have been Sign out.</h2>
                        <h2> click  <Link to="/">here</Link> for Sign In.</h2> 
                </div>
               
            </div>
        )
    }
}
export default SignOut;