import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom"
import '../styles/TopPanel.css'
import Home from "./Home";
import Furniture from "./Furniture";

const routes = [
    {
        path: "/",
        exact: true,
        main: () => <Home/>
    },

    {
        path: "/furniture",
        main: () => <Furniture/>
    },

]

function TopPanel() {
    return (
        <Router>

            <div className="TopPanelOuter">

                <div className="TopPanelHeader">
                    <ul className="TopPanelLinks">
                        <li>
                            <Link to="/">HOME</Link>
                        </li>

                        <li>
                            <Link to="/furniture">FURNITURE</Link>
                        </li>
                    </ul>
                </div>

                <Switch>
                    <div className="TopPanelPages">
                        {routes.map((route, index) => (
                            <Route
                                key={index}
                                path={route.path}
                                exact={route.exact}
                                children={<route.main/>}
                            />
                        ))}
                    </div>
                </Switch>

            </div>

        </Router>
    )
}

export default TopPanel