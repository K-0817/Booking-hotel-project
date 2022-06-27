import React, { useContext } from 'react';
import { Context } from '../store/appContext'


const Notifications = props => {
    const { store } = useContext(Context)
    return (
        <>
            {/* Right side bar */}
            <div className="rightcolumn">
                <div className="card">
                    <h4>Notificaciones</h4>
                    {
                        store.notificaciones.length > 0
                         && store.notificaciones.map((item, i) => (

                            <div className="card" key={i}>
                                <div>
                                    <ion-icon name="mail-open-outline" style={{ float: "left", fontSize: "26px" }}></ion-icon>
                                    <span style={{ float: "right" }}>{item.date}</span>
                                </div>
                                <br />
                                <div>
                                    <p style={{ textAlign: "left", paddingTop: "5px", marginBottom: "0" }}>{item.name}</p>
                                </div>
                                <div>
                                    <small style={{ textAlign: "start" }}>{item.message}</small>
                                </div>
                            </div>

                        )
                        )
                    }
                </div>

            </div>
        </>
    )
}

export default Notifications;
