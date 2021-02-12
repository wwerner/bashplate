import * as React from "react";
import {
    NavLink
} from "react-router-dom";


export const Navigation = () => (
        <nav className="navbar is-transparent  is-fixed-top">
            <div id="navbarMenu" className="navbar-menu is-active">
                <div className="navbar-end">
                    <div className="tabs is-right">
                        <ul>
                            <li><NavLink activeClassName='is-active' to="/">Generator</NavLink> </li>
                            <li> <NavLink activeClassName='is-active' to="/about">About</NavLink> </li>
                        </ul>
                        <span className="navbar-item">
                            <a className="button is-dark is-outlined"
                                href="https://github.com/wwerner/bashplate">
                                <span>Source</span>
                                <span className="icon">
                                    <i className="fab fa-github"></i>
                                </span>
                            </a>
                        </span>
                    </div>
                </div>
            </div>
        </nav >
)