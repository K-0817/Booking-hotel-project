import React, { useContext } from 'react';
import { Context } from '../store/appContext'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'

const Informes = props => {
    const { store } = useContext(Context)
    return (
        <>
            {/* Side bar */}
            <Sidebar />
            {/* Menu */}
            <Navbar />
            <h1 style={{ marginLeft: "5rem", marginTop: "2rem" }}>Informes</h1>
            <ul className="list-group ml-5">
                {
                    store.info.length > 0
                    && store.info.map((item, i) => (
                        <>
                        <div key={i}>
                        <li className="list-group-item" >{item.info}</li>
                        </div>
                        </>
                    )
                    )
                }
            </ul>
        </>
    )
}

export default Informes;