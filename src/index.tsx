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

import { defaultOptions, OptionData } from '~model'

import gnuTemplate from '~templates/gnu.hbs';
import posixTemplate from '~templates/posix.hbs';

const App = () => {
    let test = (opts: any) => console.log(opts)

    const [options, setOptions] = useState(defaultOptions)
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

    const onRemoveOption = (data: OptionData) => {
        setOptions(options.filter(o => o.shortName != data.shortName))
    }
    const onAddOption = () => {
        setOptions(options.concat({} as OptionData))
    }

    return (
        <div id="app" className="section">
            <Router>
                <Navigation />
                <Switch>
                    <Route path='/about'>
                        <About />
                    </Route>
                    <Route path='/'>
                        <Generator
                            options={options}
                            result={result}
                            onRemoveOption={onRemoveOption}
                            onAddOption={onAddOption}
                        />
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
