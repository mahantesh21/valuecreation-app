
import Sidebar from './SideBar';
import React, {Component} from 'react'
import '../assets/css/layout.css';

class Layout extends Component {
    render() {
        return (
            <div className="layout">
                
                <Sidebar/>
                
            </div>
        )
    }
}

export default Layout;