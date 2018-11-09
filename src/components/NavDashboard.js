import React from 'react'
import { Link } from "react-router-dom";

  function NavLink() {
    return (
          <div className="navBar">
           <div>
                <Link to="/IdeaSubmit">Submit an Idea</Link>
            </div>
            <div>
                <Link to="/ValueAdds">Value Adds</Link>
            </div>
            <div>
                <Link to="/ServiceImprovements">Service Improvements</Link>
             </div>
            <div>
                <Link to="/AccountInfo">Account Info</Link>
            </div>
            <div>
                <Link to="/VCF">VCF</Link>
            </div>
            <div>
                <Link to="/Budget&Cost">Budget & Cost</Link>
            </div>
            <div>
                <Link to="/YourIdeas">Your Ideas</Link>
            </div>
            <div>
                <Link to="/MyQueue">My Queue</Link>
            </div>
          </div>
    );
  }

export default NavLink;