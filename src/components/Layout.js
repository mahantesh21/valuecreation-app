
import Sidebar from './SideBar';
import React, {Component} from 'react'
import '../assets/css/layout.css';
import Header from './Header';
import Footer from './Footer';

class Layout extends Component {
    render() {
        return (
            <div className="layout">
                <Header />
                <Sidebar/>
                <Footer />
            </div>
        )
    }
}

export default Layout;