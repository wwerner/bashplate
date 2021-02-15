import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import { defaultOptions } from '~model'

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

const App = () => {
    const [options] = useState(defaultOptions)
    const [result] = useState({ script: 'as dflkjalsdk fjaldskfj' })

    return (
        <div id="app" className="section">
            <Router>
                <Navigation />
                <Switch>
                    <Route path='/about'>
                        <About />
                    </Route>
                    <Route path='/'>
                        <Generator options={options} result={result} />
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
