import React, { useContext } from 'react';
import { Context } from '../store/appContext'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'

const Buscar = props => {
    const { store, actions } = useContext(Context)
    const items = store.hotels.filter((data) => {
        if (store.search === null)
            return data
        else if (data.name.toLowerCase().includes(store.search.toLowerCase())) {
            return (
                <h1>Hola</h1>
            )
        }
    }).map(data => {
        return (

            <div className="col-sm-6 col-md-4">
                <div className="card image" style={{ backgroundImage: `url(${data.image})` }}>
                    <div className="card-body text-center p-0 my-5">
                        <h4 className="name text-white mb-5">{data.name}</h4>
                    </div>
                </div>
            </div>

        )
    })
    return (
        <>
            {/* Side bar */}
            <Sidebar />
            {/* Menu */}
            <Navbar />

            <div className="mt-5">
                <div style={{ marginLeft: "5rem" }}>
                    <div>
                        <input type="text" name="suggestions" className="form-control" placeholder="Buscar..." onChange={(e) => actions.searchSpace(e)} />

                    </div>
                    <div className="card-group">
                        {items}
                    </div>
                </div>

            </div>
        </>
    )
}

export default Buscar;

