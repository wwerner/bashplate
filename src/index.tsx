import React from 'react'
import ReactDOM from 'react-dom'

import "bulma"

import "./index.scss"

import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import {
    Navigation,
    Footer
} from '~components'

import {
    About,
    Generator,
} from '~views'

const App = () => (
    <div id="app" className="section">
        <Router>
            <Navigation />
            <Switch>
                <Route path='/about'>
                    <About />
                </Route>
                <Route path='/'>
                    <Generator />
                </Route>
            </Switch>
        </Router>
        <Footer />
    </div>
);

ReactDOM.render(
    <App />,
    document.getElementById('root')
)
