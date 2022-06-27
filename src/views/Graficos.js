import React, { useContext } from 'react';
import { Context } from '../store/appContext'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'

const Graficos = props => {
    const { store } = useContext(Context)

    return (
        <>
            {/* Side bar */}
            <Sidebar />
            {/* Menu */}
            <Navbar />
            <h1 style={{ marginLeft: "5rem", marginTop: "2rem" }}>Graficos</h1>
            <div className="container ml-5 graficos">

                {
                    store.graficos.length > 0
                    && store.graficos.slice(0, 3).map((item, i) => (
                        <>
                            <div className="progress" key={i}>
                                <div className="progress-bar progress-bar-striped" role="progressbar" style={{ width: "10%" }} aria-valuenow="10" aria-valuemin="0" aria-valuemax="100">{item.procentage}</div>
                            </div>
                            <div className="progress">
                                <div className="progress-bar progress-bar-striped bg-success" role="progressbar" style={{ width: "25%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">{item.procentage}</div>
                            </div>
                            <div className="progress">
                                <div className="progress-bar progress-bar-striped bg-info" role="progressbar" style={{ width: "50%" }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">{item.procentage}</div>
                            </div>
                            <div className="progress">
                                <div className="progress-bar progress-bar-striped bg-warning" role="progressbar" style={{ width: "75%" }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">{item.procentage}</div>
                            </div>
                            <div className="progress">
                                <div className="progress-bar progress-bar-striped bg-danger" role="progressbar" style={{ width: "100%" }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">{item.procentage}</div>
                            </div>
                        </>
                    )
                    )
                }
            </div>


        </>
    )
}

export default Graficos;