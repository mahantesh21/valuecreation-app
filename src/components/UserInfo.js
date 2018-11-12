import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import UsersInfo from '../data/UsersInfo'


class UserInfo extends Component {
    constructor(props)
    {
        super(props);
        this.state={
          UserName:UsersInfo[1].FirstName  
        };
    }
    render() {
        return (
                <div>
                    Hello, <Link to="/AccountInfo">{this.state.UserName}</Link>
                </div>
        )
    }
}
export default UserInfo;