import React from 'react'
import ReactDOM from 'react-dom'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import { Navigation } from './components'
import "bulma"

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
          <a href="https://reactjs.org/">React.js</a>,
          <a href="https://bulma.io/">Bulma</a>,
          <a href="https://prismjs.com/">Prism.js</a>,
          <a href="https://handlebarsjs.com/">handlebars</a>.
        Thanks to
          <a href="https://github.com">Github</a> for VCS,
          <a href="https://vercel.com">Vercel</a> for hosting,
          <a href="https://circleci.com">CircleCI</a> for CI/CD.
      </div>
        </footer>
    </div>
);

const Generator = () => <div>Generator</div>
const About = () => <div>About</div>

ReactDOM.render(
    <App />,
    document.getElementById('root')
)
