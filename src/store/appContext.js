import React, { Component } from 'react';
import getState from './flux';

export const Context = React.createContext(null);

const injectContext = PassedComponent => {
    class StoreWrapper extends Component {
        constructor(props) {
            super(props);
            //this will be passed as the contenxt value
            this.state = getState({
                getStore: () => this.state.store,
                getActions: () => this.state.actions,
                setStore: updatedStore =>
                    this.setState({
                        store: Object.assign(this.state.store, updatedStore)
                    })
            });
        }
        componentDidMount() {
            this.state.actions.GetNotificaciones()
            this.state.actions.GetHotels()
            this.state.actions.GetEvent()
            this.state.actions.GetGraficos()
            this.state.actions.GetConfig()
            this.state.actions.GetInfo()
            this.state.actions.GetUsarios()
            /**
             * EDIT THIS!
             * This function is the equivalent to "window.onLoad", it only run once on the entire application lifetime
             * you should do your ajax requests or fetch api requests here
             **/
        }
        render() {
            // the initial value for the context its not null anymore, but the current state of this component,
            // the context will have a getStore and setStore functions available then, because they were declared
            // on the state of this component
            return (
                <Context.Provider value={this.state}>
                    <PassedComponent {...this.props} />
                </Context.Provider>
            );
        }
    }
    return StoreWrapper;
}
export default injectContext;