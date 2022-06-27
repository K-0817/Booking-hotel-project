import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './views/Home'
import Calendario from './views/Calendario'
import Menu from './views/Menu'
import Usario from './views/Usario'
import Informes from './views/Informes'
import Graficos from './views/Graficos'
import Configuracion from './views/Configuracion'
import Mensajes from './views/Mensajes'
import Buscar from './views/Buscar'
import Logout from './views/Logout'
import NotFound from './views/Notfound'
import injectContext from './store/appContext'

const Layout = props => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/calendario" component={Calendario} />
                <Route exact path="/menu" component={Menu} />
                <Route exact path="/usario" component={Usario} />
                <Route exact path="/informes" component={Informes} />
                <Route exact path="/graficos" component={Graficos} />
                <Route exact path="/configuracion" component={Configuracion} />
                <Route exact path="/mensajes/:id?" component={Mensajes} />
                <Route exact path="/buscar" component={Buscar} />
                <Route exact path="/logout" component={Logout} />
                <Route component={NotFound} />
            </Switch>
        </BrowserRouter>
    )
}

export default injectContext(Layout);