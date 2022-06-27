import React, { useContext } from 'react';
import { Context } from '../store/appContext'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'

const Calendario = props => {
    const { store } = useContext(Context)

    return (
        <>
            {/* Side bar */}
            <Sidebar />
            {/* Menu */}
            <Navbar />

            <div className="main-container-wrapper mt-5">
                <header>
                    <button className="header__btn header__btn--left" title="Menu">
                        <svg className="icon" width="20px" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill="#fff" d="M0 0h20v2H0zM0 7h20v2H0zM0 14h20v2H0z" />
                        </svg>
                    </button>
                    <button className="header__btn header__btn--right" title="Add event">
                        <svg className="icon" width="26px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <path fill="#fff" d="M416 277.333H277.333V416h-42.666V277.333H96v-42.666h138.667V96h42.666v138.667H416v42.666z" />
                        </svg>
                    </button>
                </header>
                <main>
                    <div className="calendar-container">
                        <div className="calendar-container__header">
                            <button className="calendar-container__btn calendar-container__btn--left" title="Previous">
                                <i className="icon ion-ios-arrow-back"></i>
                            </button>
                            <h2 className="calendar-container__title">October 2018</h2>
                            <button className="calendar-container__btn calendar-container__btn--right" title="Next">
                                <i className="icon ion-ios-arrow-forward"></i>
                            </button>
                        </div>
                        <div className="calendar-container__body">
                            <div className="calendar-table">
                                <div className="calendar-table__header">
                                    <div className="calendar-table__row">
                                        <div className="calendar-table__col">S</div>
                                        <div className="calendar-table__col">M</div>
                                        <div className="calendar-table__col">T</div>
                                        <div className="calendar-table__col">W</div>
                                        <div className="calendar-table__col">T</div>
                                        <div className="calendar-table__col">F</div>
                                        <div className="calendar-table__col">S</div>
                                    </div>
                                </div>
                                <div className="calendar-table__body">
                                    <div className="calendar-table__row">
                                        {
                                            store.mensajes.length > 0
                                            && store.mensajes.map((item, i) => (

                                                <div className="card" key={i}>
                                                    <div>
                                                        <p>{item.name}</p>
                                                        <p>{item.message}</p>
                                                        <p>{item.client}</p>
                                                    </div>
                                                </div>

                                            )
                                            )
                                        }
                                        <div className="calendar-table__col calendar-table__inactive">
                                            <div className="calendar-table__item">
                                                <span>30</span>
                                            </div>
                                        </div>
                                        <div className="calendar-table__col calendar-table__today">
                                            <div className="calendar-table__item">
                                                <span>1</span>
                                            </div>
                                        </div>
                                        <div className="calendar-table__col">
                                            <div className="calendar-table__item">
                                                <span>2</span>
                                            </div>
                                        </div>
                                        <div className="calendar-table__col">
                                            <div className="calendar-table__item">
                                                <span>3</span>
                                            </div>
                                        </div>
                                        <div className="calendar-table__col">
                                            <div className="calendar-table__item">
                                                <span>4</span>
                                            </div>
                                        </div>
                                        <div className="calendar-table__col calendar-table__event">
                                            <div className="calendar-table__item">
                                                <span>5</span>
                                            </div>
                                        </div>
                                        <div className="calendar-table__col">
                                            <div className="calendar-table__item">
                                                <span>6</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="calendar-table__row">
                                        <div className="calendar-table__col calendar-table__event">
                                            <div className="calendar-table__item">
                                                <span>7</span>
                                            </div>
                                        </div>
                                        <div className="calendar-table__col">
                                            <div className="calendar-table__item">
                                                <span>8</span>
                                            </div>
                                        </div>
                                        <div className="calendar-table__col">
                                            <div className="calendar-table__item">
                                                <span>9</span>
                                            </div>
                                        </div>
                                        <div className="calendar-table__col">
                                            <div className="calendar-table__item">
                                                <span>10</span>
                                            </div>
                                        </div>
                                        <div className="calendar-table__col">
                                            <div className="calendar-table__item">
                                                <span>11</span>
                                            </div>
                                        </div>
                                        <div className="calendar-table__col">
                                            <div className="calendar-table__item">
                                                <span>12</span>
                                            </div>
                                        </div>
                                        <div className="calendar-table__col">
                                            <div className="calendar-table__item">
                                                <span>13</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="calendar-table__row">
                                        <div className="calendar-table__col">
                                            <div className="calendar-table__item">
                                                <span>14</span>
                                            </div>
                                        </div>
                                        <div className="calendar-table__col">
                                            <div className="calendar-table__item">
                                                <span>15</span>
                                            </div>
                                        </div>
                                        <div className="calendar-table__col calendar-table__event calendar-table__event--long calendar-table__event--start">
                                            <div className="calendar-table__item">
                                                <span>16</span>
                                            </div>
                                        </div>
                                        <div className="calendar-table__col calendar-table__event calendar-table__event--long">
                                            <div className="calendar-table__item">
                                                <span>17</span>
                                            </div>
                                        </div>
                                        <div className="calendar-table__col calendar-table__event calendar-table__event--long calendar-table__event--end">
                                            <div className="calendar-table__item">
                                                <span>18</span>
                                            </div>
                                        </div>
                                        <div className="calendar-table__col">
                                            <div className="calendar-table__item">
                                                <span>19</span>
                                            </div>
                                        </div>
                                        <div className="calendar-table__col">
                                            <div className="calendar-table__item">
                                                <span>20</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="calendar-table__row">
                                        <div className="calendar-table__col">
                                            <div className="calendar-table__item">
                                                <span>21</span>
                                            </div>
                                        </div>
                                        <div className="calendar-table__col">
                                            <div className="calendar-table__item">
                                                <span>22</span>
                                            </div>
                                        </div>
                                        <div className="calendar-table__col">
                                            <div className="calendar-table__item">
                                                <span>23</span>
                                            </div>
                                        </div>
                                        <div className="calendar-table__col">
                                            <div className="calendar-table__item">
                                                <span>24</span>
                                            </div>
                                        </div>
                                        <div className="calendar-table__col">
                                            <div className="calendar-table__item">
                                                <span>25</span>
                                            </div>
                                        </div>
                                        <div className="calendar-table__col">
                                            <div className="calendar-table__item">
                                                <span>26</span>
                                            </div>
                                        </div>
                                        <div className="calendar-table__col calendar-table__event calendar-table__event--long calendar-table__event--start">
                                            <div className="calendar-table__item">
                                                <span>27</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="calendar-table__row">
                                        <div className="calendar-table__col calendar-table__event calendar-table__event--long calendar-table__event--end">
                                            <div className="calendar-table__item">
                                                <span>28</span>
                                            </div>
                                        </div>
                                        <div className="calendar-table__col">
                                            <div className="calendar-table__item">
                                                <span>29</span>
                                            </div>
                                        </div>
                                        <div className="calendar-table__col">
                                            <div className="calendar-table__item">
                                                <span>30</span>
                                            </div>
                                        </div>
                                        <div className="calendar-table__col">
                                            <div className="calendar-table__item">
                                                <span>31</span>
                                            </div>
                                        </div>
                                        <div className="calendar-table__col calendar-table__event calendar-table__inactive">
                                            <div className="calendar-table__item">
                                                <span>1</span>
                                            </div>
                                        </div>
                                        <div className="calendar-table__col calendar-table__inactive">
                                            <div className="calendar-table__item">
                                                <span>2</span>
                                            </div>
                                        </div>
                                        <div className="calendar-table__col calendar-table__inactive">
                                            <div className="calendar-table__item">
                                                <span>3</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="events-container">
                        <span className="events__title">Upcoming events this month</span>
                        <ul className="events__list">
                            {
                                store.date.length > 0
                                && store.date.map((item, i) => (
                                    <li className="events__item" key={i}>
                                        <div className="events__item--left">
                                            <span className="events__name">{item.event}</span>
                                            <span className="events__date">{item.day}</span>
                                        </div>
                                        <span className="events__tag">{item.time}</span>
                                    </li>
                                )
                                )
                            }
                        </ul>
                    </div>
                </main>
            </div>
        </>
    )
}

export default Calendario;