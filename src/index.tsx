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
    About,
    Generator
} from './components'

console.log('Hello from tsx!')

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
        <footer className="footer box">
            <div className="content has-text-centered">
                Bash Plate is standing on the shoulders of giants:
                    &nbsp;<a href="https://reactjs.org/">React.js</a>,
                    &nbsp;<a href="https://bulma.io/">Bulma</a>,
                    &nbsp;<a href="https://prismjs.com/">Prism.js</a>,
                    &nbsp;<a href="https://handlebarsjs.com/">handlebars</a>.
                Thanks to
                    &nbsp;<a href="https://github.com">Github</a> for VCS,
                    &nbsp;<a href="https://vercel.com">Vercel</a> for hosting,
                    &nbsp;<a href="https://circleci.com">CircleCI</a> for CI/CD.
             </div>
        </footer>
    </div>
);

ReactDOM.render(
    <App />,
    document.getElementById('root')
)
