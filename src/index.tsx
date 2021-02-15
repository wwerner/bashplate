import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import { defaultOptions } from './options'

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
import { OptionData } from '~options'

const App = () => {
    const [options] = useState(defaultOptions)

    return (
        <div id="app" className="section">
            <Router>
                <Navigation />
                <Switch>
                    <Route path='/about'>
                        <About />
                    </Route>
                    <Route path='/'>
                        <Generator {...options} />
                    </Route>
                </Switch>
            </Router>
            <Footer />
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)
