import React from 'react';
import { HashLink as Link } from 'react-router-hash-link'

const Sidebar = props => {
    return (
        <>
            {/* Side bar */}
            <div className="sidenav">
                <Link to="/"><ion-icon name="fitness-outline" style={{ marginBottom: "50px" }}></ion-icon></Link>
                <Link to="/calendario"><ion-icon name="calendar-outline"></ion-icon></Link>
                <Link to="/menu"><ion-icon name="apps-outline"></ion-icon></Link>
                <Link to="/usario"><ion-icon name="person-outline"></ion-icon></Link>
                <Link to="/informes"><ion-icon name="document-text-outline"></ion-icon></Link>
                <Link to="/graficos"><ion-icon name="bar-chart-outline"></ion-icon></Link>
                <Link to="/logout"><ion-icon name="log-out-outline" style={{ position: "absolute", bottom: "0" }}></ion-icon></Link>
            </div>
        </>
    )
}

export default Sidebar;
