import React from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Dashboard from '../views/Dashboard';
import IdeaSubmit from '../views/IdeaSubmit';
import ValueAdds from '../views/ValueAdds';
import ServiceImprovements from '../views/ServiceImprovements';
import AccountInfo from '../views/AccountInfo';
import VCF from '../views/VCF';
import BudgetAndCost from '../views/BudgetAndCost';
import YourIdeas from '../views/YourIdeas';
import MyQueue from '../views/MyQueue';

const routes = [

    {
      path: "/IdeaSubmit",
      sidebar: () => <div>Idea Submit</div>,
      main:  () => <IdeaSubmit/>
    },
    {
      path: "/ValueAdds",
      sidebar: () => <div>Value Adds</div>,
      main:  () => <ValueAdds/> 
    },  
    {
      path: "/ServiceImprovements",
      sidebar: () => <div>Service Improvemetns</div>,
      main:  () => <ServiceImprovements/>
    },
    {
      path: "/AccountInfo",
      sidebar: () => <div>Account Info</div>,
      main:  () => <AccountInfo/> 
    },
    {
      path: "/VCF",
      sidebar: () => <div>Value Creation Framework</div>,
      main:  () => <VCF/>
    },
    {
      path: "/Budget&Cost",
      sidebar: () => <div>Budget & Cost</div>,
      main:  () => <BudgetAndCost/>
    },
    {
      path: "/YourIdeas",
      sidebar: () => <div>Your Ideas</div>,
      main:  () => <YourIdeas/> 
    },
    {
      path: "/MyQueue",
      sidebar: () => <div>My Queue</div>,
      main:  () => <MyQueue/> 
    }
  ];
  

  function NavLink() {
    return (
        <div>    
          <div className="navBar">
            <ul>
              <li>
                <Link to="/IdeaSubmit">Submit an Idea</Link>
              </li>
              <li>
                <Link to="/ValueAdds">Value Adds</Link>
              </li>
              <li>
                <Link to="/ServiceImprovements">Service Improvements</Link>
              </li>
              <li>
                <Link to="/AccountInfo">Account Info</Link>
              </li>
              <li>
                <Link to="/VCF">VCF</Link>
              </li>
              <li>
                <Link to="/Budget&Cost">Budget & Cost</Link>
              </li>
              <li>
                <Link to="/YourIdeas">Your Ideas</Link>
              </li>
              <li>
                <Link to="/MyQueue">My Queue</Link>
              </li>
            
  
            </ul>
          </div>
        
        </div>
    );
  }

export default NavLink;