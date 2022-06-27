import React from 'react';
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import Notifications from '../components/Notifications'
import Section1 from '../components/Section1'
import Section3 from '../components/Section3'
import Section2 from '../components/Section2'

const Home = props => {
    return (
        <>
            {/* Side bar */}
            <Sidebar />

            {/* Menu */}
            <Navbar />

            <div className="row">
                <div className="leftcolumn">

                    {/* Section 1 */}
                    <Section1 />

                    {/* Section 2 */}
                    <Section2 />

                    {/* Section 3 */}
                    <h4 className="ml-3 mt-3 name">Hoteles Disponibles</h4>
                    <Section3 />

                </div>

                {/* Right side bar */}
                <Notifications />

            </div>
        </>
    )
}

export default Home;
