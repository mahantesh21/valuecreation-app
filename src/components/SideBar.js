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
import Header from './Header';
import Footer from './Footer';
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
    const activeStyle = { 
         boxShadow: '0 12px 20px -10px rgba(0,188,212,.28), 0 4px 20px 0 rgba(0,0,0,.12), 0 7px 8px -5px rgba(0,188,212,.2)',
         backgroundColor: '#00acc1'
     };
    const linkStyle={
      color:'#fff'
    } 
    return (
      <Router>
        <div  className="sideBar">    
          <div className="leftNavBar column">
            <div className="logo-container"></div>
            <ul>
              <li style={this.state.active === 'dashboard' ? activeStyle : {}}>
                <Link  style={this.state.active === 'dashboard' ? linkStyle : {}} onClick={this._handleClick.bind(this, 'dashboard')} to="/">Dashboard</Link>
              </li>
              <li style={this.state.active === 'ideasubmit' ? activeStyle : {}}>
                <Link style={this.state.active === 'ideasubmit' ? linkStyle : {}}  onClick={this._handleClick.bind(this, 'ideasubmit')} to="/IdeaSubmit">Submit an Idea</Link>
              </li>
              <li style={this.state.active === 'valueadds' ? activeStyle : {}}>
                <Link style={this.state.active === 'valueadds' ? linkStyle : {}} onClick={this._handleClick.bind(this, 'valueadds')}  to="/ValueAdds">Value Adds</Link>
              </li>
              <li style={this.state.active === 'serviceimprovements' ? activeStyle : {}}>
                <Link style={this.state.active === 'serviceimprovements' ? linkStyle : {}} onClick={this._handleClick.bind(this, 'serviceimprovements')} to="/ServiceImprovements">Service Improvements</Link>
              </li>
              <li style={this.state.active === 'accountinfo' ? activeStyle : {}}>
                <Link  style={this.state.active === 'accountinfo' ? linkStyle : {}} onClick={this._handleClick.bind(this, 'accountinfo')} to="/AccountInfo">Account Info</Link>
              </li>
              <li style={this.state.active === 'vcf' ? activeStyle : {}}>
                <Link style={this.state.active === 'vcf' ? linkStyle : {}}  onClick={this._handleClick.bind(this, 'vcf')} to="/VCF">VCF</Link>
              </li>
              <li style={this.state.active === 'Budget&Cost' ? activeStyle : {}}>
                <Link style={this.state.active === 'Budget&Cost' ? linkStyle : {}}  onClick={this._handleClick.bind(this, 'Budget&Cost')} to="/Budget&Cost">Budget & Cost</Link>
              </li>
              <li style={this.state.active === 'yourideas' ? activeStyle : {}}>
                <Link style={this.state.active === 'yourideas' ? linkStyle : {}} onClick={this._handleClick.bind(this, 'yourideas')}  to="/YourIdeas">Your Ideas</Link>
              </li>
              <li style={this.state.active === 'myqueue' ? activeStyle : {}}>
                <Link style={this.state.active === 'myqueue' ? linkStyle : {}}  onClick={this._handleClick.bind(this, 'myqueue')} to="/MyQueue">My Queue</Link>
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
          <Header />
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
            
            <Footer />
          </div>
        </div>
      </Router>
    );
  }
}

export default Sidebar;