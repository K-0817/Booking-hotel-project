import React, { useContext } from 'react';
import { Context } from '../store/appContext'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'

const Usario = props => {
    const { store } = useContext(Context)

    return (
        <>
            {/* Side bar */}
            <Sidebar />
            {/* Menu */}
            <Navbar />
            <h1 style={{ marginLeft: "5rem", marginTop: "2rem" }}>Usario</h1>
            <div className="row ml-5">
            {
                    store.usario.length > 0
                    && store.usario.map((item, i) => (
                        <div className="col-sm-6 col-md-4" key={i}>
                            <div className="card image" style={{ backgroundImage: `url(${item.image})` }}>
                                <div className="card-body text-center p-0">
                                    <h4 className="name text-white my-5">{item.name}</h4>
                                </div>
                            </div>
                        </div>
                    )
                    )
                }
                </div>
        </>
    )
}

export default Usario;