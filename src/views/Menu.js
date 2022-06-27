import React from 'react';
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'

const Menu = props => {
    return (
        <>
            {/* Side bar */}
            <Sidebar />
            {/* Menu */}
            <Navbar />
            <h1 style={{ marginLeft: "5rem", marginTop: "2rem" }}>Menu</h1>

            
        </>
    )
}

export default Menu;