import React, {Component} from 'react';
import '../assets/css/Header.css';
import UserInfo from './UserInfo';

class Header extends Component {
    render() {
        return (
            <div className="App-header">
               <div className="headerName"></div> 
               <div className="UserInfo">
                <UserInfo />
               </div>
            </div>
        )
    }
}
export default Header;