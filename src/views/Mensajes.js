import React, { useContext, useEffect } from 'react';
import { Context } from '../store/appContext'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'

const Mensajes = ({ match }) => {
    const { store, actions } = useContext(Context)

    const id = match.params.id || 'todos'
    useEffect(() => {
        actions.GetMensajes()
        actions.GetMensajesById(id)
    }, [actions,id])
    return (
        <>
            {/* Side bar */}
            <Sidebar />
            {/* Menu */}
            <Navbar />
            <div style={{ marginLeft: "5rem", marginTop: "2rem" }}>

                <div className="card">
                    {
                        JSON.stringify(store.currentMensajes) !== "{}" ? (
                            <>
                                <div className="card">
                                    <div>
                                        <p>{store.currentMensajes.name}</p>
                                        <p>{store.currentMensajes.message}</p>
                                        <p>{store.currentMensajes.client}</p>
                                    </div>
                                </div>
                            </>
                        )
                            :
                            (
                                <>
                                    {
                                        store.mensajes.length > 0
                                        && store.mensajes.map((item, i) => (

                                            <>
                                                <div className="card" key={i}>
                                                    <div>
                                                        <p>{item.name}</p>
                                                        <p>{item.message}</p>
                                                        <p>{item.client}</p>
                                                    </div>
                                                </div>
                                            </>
                                        )
                                        )
                                    }
                                </>
                            )
                    }
                </div>
            </div>
        </>
    )
}

export default Mensajes;