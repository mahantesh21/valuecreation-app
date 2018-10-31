import React from "react";
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
// Each logical "route" has two components, one for
// the sidebar and one for the main area. We want to
// render both of them in different places when the
// path matches the current URL.
const routes = [
  {
    path: "/",
    exact: true,
    sidebar: () => <div>home</div>,
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

function Sidebar() {
  return (
    <Router>
      <div  className="sideBar">
        <div 
          style={{
            flex: 1,
            padding: "10px",
            width: "20%",
            background: "#f0f0f0"
          }}
        >
          <ul  style={{ listStyleType: "none", padding: 0 }}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/IdeaSubmit">IdeaSubmit</Link>
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

          {routes.map((route, index) => (
            // You can render a <Route> in as many places
            // as you want in your app. It will render along
            // with any other <Route>s that also match the URL.
            // So, a sidebar or breadcrumbs or anything else
            // that requires you to render multiple things
            // in multiple places at the same URL is nothing
            // more than multiple <Route>s.
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              component={route.sidebar}
            />
          ))}
        </div>

        <div style={{ flex: 6, padding: "10px" }}>
          {routes.map((route, index) => (
            // Render more <Route>s with the same paths as
            // above, but different components this time.
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              component={route.main}
            />
          ))}
        </div>
      </div>
    </Router>
  );
}

export default Sidebar;