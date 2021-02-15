import React, { useState } from 'react'
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

import { defaultOptions } from '~model'

import gnuTemplate from '~templates/gnu.hbs';
import posixTemplate from '~templates/posix.hbs';

const App = () => {
    let test = (opts:any) => console.log(opts)

    const [options] = useState(defaultOptions)
    let template = gnuTemplate
    const [result] = useState({
        script: template({
            description: "Bashplate Script Description",
            requiredOptions: options.filter(o => o.required),
            flagOptions: options.filter(o => o.isFlag),
            parameterOptions: options.filter(o => !o.isFlag),
            options: Object.values(options)
        }),

    })


    //console.log(options)
    //console.log(result)

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
