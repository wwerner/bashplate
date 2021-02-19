import React, { useEffect, useState } from 'react'
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
    const [options, setOptions] = useState(defaultOptions)
    let template = gnuTemplate

    const renderScript = (): string => template({
        description: "Bashplate Script Description",
        requiredOptions: options.filter(o => o.required),
        flagOptions: options.filter(o => o.isFlag),
        parameterOptions: options.filter(o => !o.isFlag),
        options
    })

    const [result, setResult] = useState({
        script: renderScript()
    })


    useEffect(() => {
        setResult({
            ...result,
            script: renderScript()
        })
    }, [options])


    const onRemoveOption =
        (option: OptionData) => setOptions(options.filter(o => o.id !== option.id))

    const onAddOption =
        () => setOptions(options.concat({ id: options.length } as OptionData))

    const onChangeOption =
        (data: OptionData) => setOptions(options.map((o) => o.id === data.id ? data : o))

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
                            onAddOption={onAddOption}
                            onChangeOption={onChangeOption}
                            onRemoveOption={onRemoveOption}
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
