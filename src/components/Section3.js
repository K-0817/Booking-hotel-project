import React, { useContext } from 'react';
import { Context } from '../store/appContext'

const Section3 = props => {
    const { store, actions } = useContext(Context)

    return (
        <>
            {/* Section 3 */}
           
            <div className="row">

                {
                    store.hotels.length > 0
                    && store.hotels.slice(0, 3).map((item, i) => (
                        <div className="col-sm-6 col-md-4" key={i}>
                            <div className="card image" style={{ backgroundImage: `url(${item.image})` }}>
                                <div className="card-body text-center p-0">
                                    <h4 className="name text-white mb-5">{item.name}</h4>
                                    <button href="#" className="btn text-white py-2 px-3 mt-5" data-toggle="modal" data-target="#myModal" onClick={() => actions.GetCurrentHotel(item)}>Reservar</button>

                                </div>
                            </div>
                        </div>
                    )
                    )
                }
                {/* Just for show 2 cards with different width */}
                {
                    store.hotels.length > 0
                    && store.hotels.slice(3, 5).map((item, i) => (
                        <div className="col-sm-6 col-md-6 test" key={i}>
                            <div className="card image" style={{ backgroundImage: `url(${item.image})` }}>
                                <div className="card-body text-center p-0">
                                    <h4 className="name text-white mb-5">{item.name}</h4>
                                    <button href="#" className="btn text-white py-2 px-3 mt-5" data-toggle="modal" data-target="#myModal" onClick={() => actions.GetCurrentHotel(item)}>Reservar</button>
                                </div>
                            </div>
                        </div>
                    )
                    )
                }
            </div>
            {/* Modal */}
            <div className="modal fade" id="myModal" tabIndex="-1" role="dialog">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title text-center" id="exampleModalLabel">{store.currentHotel.name}</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <img src={store.currentHotel.image} style={{ width: "100%" }} alt="hotel_image" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Section3;
