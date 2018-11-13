import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import UsersInfo from '../data/UsersInfo';
import Popover from 'react-simple-popover';


class UserInfo extends Component {
    constructor(props)
    {
        super(props);
        this.state={
          UserName:UsersInfo[1].FirstName,
          open: false 
        };
    }
     handleClick(e) {
        this.setState({open: !this.state.open});
      }
     
      handleClose(e) {
        this.setState({open: false});
      }
    render() {
        return (
                <div>
                    {/* Hello, <Link to="/AccountInfo">{this.state.UserName}</Link> */}
                        Hello,  <a
                            href="#"
                            className="button"
                            ref={(node) => { this.target = node }}
                            onClick={this.handleClick.bind(this)}>{this.state.UserName}</a>
                            <Popover
                                placement='bottom'
                                container={this}
                                target={this.refs.target}
                                show={this.state.open}
                                onHide={this.handleClose.bind(this)} >
                               <ul>
                                   <li><Link to="/AccountInfo">Edit profile</Link></li>
                                   <li><Link to="/">Sign Out</Link></li>
                                </ul>   
                            </Popover>
                </div>
        )
    }
}
export default UserInfo;