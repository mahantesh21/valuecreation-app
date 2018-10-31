import Header from './Header'
import Footer from './Footer'
import Sidebar from './SideBar';
import React, {Component} from 'react'

class Layout extends Component {
    render() {
        return (
            <div>
                <Header />
                <Sidebar/>
                <Footer />
            </div>
        )
    }
}

export default Layout;