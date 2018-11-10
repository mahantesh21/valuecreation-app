import React, {Component} from "react";
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
import '../assets/css/SideBar.css';
const routes = [
  {
    path: "/",
    exact: true,
    sidebar: () => <div>Dashboard</div>,
    main: () => <Dashboard/>
  },
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


class Sidebar extends Component{

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
    const activeStyle = { color: '#FFFFFF' };
    return (
      <Router>
        <div  className="sideBar">    
          <div className="leftNavBar column">
            <div className="logo-container"></div>
            <ul>
              <li>
                <Link  style={this.state.active === 'dashboard' ? activeStyle : {}} onClick={this._handleClick.bind(this, 'dashboard')} to="/">Dashboard</Link>
              </li>
              <li>
                <Link style={this.state.active === 'ideasubmit' ? activeStyle : {}}  onClick={this._handleClick.bind(this, 'ideasubmit')} to="/IdeaSubmit">Submit an Idea</Link>
              </li>
              <li>
                <Link style={this.state.active === 'valueadds' ? activeStyle : {}} onClick={this._handleClick.bind(this, 'valueadds')}  to="/ValueAdds">Value Adds</Link>
              </li>
              <li>
                <Link style={this.state.active === 'serviceimprovements' ? activeStyle : {}} onClick={this._handleClick.bind(this, 'serviceimprovements')} to="/ServiceImprovements">Service Improvements</Link>
              </li>
              <li>
                <Link style={this.state.active === 'accountinfo' ? activeStyle : {}} onClick={this._handleClick.bind(this, 'accountinfo')} to="/AccountInfo">Account Info</Link>
              </li>
              <li>
                <Link style={this.state.active === 'vcf' ? activeStyle : {}} onClick={this._handleClick.bind(this, 'vcf')} to="/VCF">VCF</Link>
              </li>
              <li>
                <Link style={this.state.active === 'Budget&Cost' ? activeStyle : {}} onClick={this._handleClick.bind(this, 'Budget&Cost')} to="/Budget&Cost">Budget & Cost</Link>
              </li>
              <li>
                <Link style={this.state.active === 'yourideas' ? activeStyle : {}} onClick={this._handleClick.bind(this, 'yourideas')}  to="/YourIdeas">Your Ideas</Link>
              </li>
              <li>
                <Link style={this.state.active === 'myqueue' ? activeStyle : {}}  onClick={this._handleClick.bind(this, 'myqueue')} to="/MyQueue">My Queue</Link>
              </li>
            

            {/* {routes.map((route, index) => (
            
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                component={route.sidebar}
              />
            ))} */}
            </ul>
          </div>
          <div className="right-panel column">
            <div className="container" style={{  }}>
              {routes.map((route, index) => (
                <Route
                  key={index}
                  path={route.path}
                  exact={route.exact}
                  component={route.main}
                />
              ))}
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default Sidebar;