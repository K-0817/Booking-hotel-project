import React from 'react';
import { HashLink as Link } from 'react-router-hash-link'

const Navbar = props => {
    return (
        <>
            {/* Menu */}
            <div className="topnav">
                <h5 href="#">Dashboard</h5>
                <Link to="/graficos"><ion-icon style={{ marginRight: "50px" }} name="bar-chart-outline"></ion-icon></Link>
                <Link to="/configuracion"><ion-icon name="settings-outline"></ion-icon></Link>
                <Link to="/mensajes"><ion-icon name="mail-unread-outline"></ion-icon></Link>
                <Link to="/buscar"><ion-icon name="search-outline"></ion-icon></Link>
            </div>
        </>
    )
}

export default Navbar;
