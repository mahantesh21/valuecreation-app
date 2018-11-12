import React, {Component} from 'react'
import { Link } from "react-router-dom";

class NavLink extends Component{
    
  constructor(props){
    super(props)
    this.state={
      active: null
    };
  }

  _handleClick(menuItem) { 
    this.setState({ active: menuItem });
  }

    render(){
        return (
            <div className="navBar">
             <div>
                  <Link onClick={this._handleClick.bind(this, 'ideasubmit')} to="/IdeaSubmit">Submit an Idea</Link>
              </div>
              <div>
                  <Link onClick={this._handleClick.bind(this, 'ValueAdds')} to="/ValueAdds">Value Adds</Link>
              </div>
              <div>
                  <Link onClick={this._handleClick.bind(this, 'ServiceImprovements')}  to="/ServiceImprovements">Service Improvements</Link>
               </div>
              <div>
                  <Link  onClick={this._handleClick.bind(this, 'AccountInfo')}  to="/AccountInfo">Account Info</Link>
              </div>
              <div>
                  <Link onClick={this._handleClick.bind(this, 'VCF')}  to="/VCF">VCF</Link>
              </div>
              <div>
                  <Link onClick={this._handleClick.bind(this, 'Budget&Cost')}  to="/Budget&Cost">Budget & Cost</Link>
              </div>
              <div>
                  <Link onClick={this._handleClick.bind(this, 'YourIdeas')}  to="/YourIdeas">Your Ideas</Link>
              </div>
              <div>
                  <Link onClick={this._handleClick.bind(this, 'MyQueue')}  to="/MyQueue">My Queue</Link>
              </div>
            </div>
      );
    }
}

export default NavLink;