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
import PostFurniture from "./PostFurniture";
import DeleteFurniture from "./DeleteFurniture";
import UpdateFurniture from "./UpdateFurniture";

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

    {
        path: "/add",
        main: () => <PostFurniture/>
    },

    {
        path: "/delete",
        main: () => <DeleteFurniture/>
    },

    {
        path: "/update",
        main: () => <UpdateFurniture/>
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

                        <li>
                            <Link to="/add">POST</Link>
                        </li>

                        <li>
                            <Link to="/delete">DELETE</Link>
                        </li>

                        <li>
                            <Link to="/update">UPDATE</Link>
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