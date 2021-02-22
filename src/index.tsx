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

import { defaultOptions, OptionData, Dialects, templates } from '~model'

const App = () => {
    const [options, setOptions] = useState(defaultOptions)
    const [dialect, setDialect] = useState(Dialects.posix)

    const renderScript = (dialect: Dialects): string => templates[dialect]({
        description: "Bashplate Script Description",
        requiredOptions: options.filter(o => o.required),
        flagOptions: options.filter(o => o.isFlag),
        parameterOptions: options.filter(o => !o.isFlag),
        callingOptions: options.filter(o => o.functionCall && o.functionCall !== 'usage' && o.functionCall !== 'version'),
        options: options.map(o => (
            {
                ...o,
                // trick handlebars into rendering 0 as exit code. 0 is false for #if, "0" isn't
                exitCode: o.exitCode === 0 ? "0" : o.exitCode
            }))
    })

    const [result, setResult] = useState({
        script: renderScript(dialect),
        dialect: dialect
    })

    useEffect(() => {
        setResult({
            script: renderScript(dialect),
            dialect: dialect
        })
    }, [options, dialect])


    const onRemoveOption =
        (option: OptionData) => setOptions(options.filter(o => o.id !== option.id))

    const onAddOption =
        () => setOptions(options.concat({ id: options.length } as OptionData))

    const onChangeOption =
        (data: OptionData) => setOptions(options.map((o) => o.id === data.id ? data : o))

    const onChangeDialect =
        (dialect: Dialects) => setDialect(dialect)

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
                            onChangeDialect={onChangeDialect}
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
