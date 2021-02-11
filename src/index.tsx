import React from 'react'
import ReactDOM from 'react-dom'
import { Hello } from './components'

console.log('Hello from tsx!')

const App = () => (
    <div>
        <h1>Bashplate</h1>
        <Hello name="foo" />
    </div>
);

ReactDOM.render(
    <App />,
    document.getElementById('root')
)
