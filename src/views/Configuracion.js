import React, { useContext } from 'react';
import { Context } from '../store/appContext'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'

const Configuracion = props => {
    const { store } = useContext(Context)

    return (
        <>
            {/* Side bar */}
            <Sidebar />
            {/* Menu */}
            <Navbar />
            <h1 style={{ marginLeft: "5rem", marginTop: "2rem" }}>Configuracion</h1>
            <ul className="list-group ml-5">
                {
                    store.config.length > 0
                    && store.config.map((item, i) => (
                        <>
                            <li className="list-group-item">{item.setting}</li>
                            
                        </>
                    )
                    )
                }
            </ul>
        </>
    )
}

export default Configuracion;