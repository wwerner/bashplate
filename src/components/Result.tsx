import * as React from "react";
import * as prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';

export const Result = () => (
    <div className="result-script">
        <div className="tabs">
            <ul>
                <li><a>POSIX</a></li>
                <li><a>GNU (w/ --long-opts)</a></li>
            </ul>
        </div >

        <pre>
            <a className="button is-outlined is-link is-inverted is-pulled-right"
                style={{ marginLeft: "1vh" }}>
                <span>Copy&nbsp;</span>
                <span className="icon"><i className="fa fa-copy"></i></span>
            </a>
            <a className="button is-outlined is-link is-inverted is-pulled-right">
                <span>Download&nbsp;</span>
                <span className="icon"><i className="fa fa-download"></i></span>
            </a>
            
            <code className="language-bash"></code>
        </pre>
    </div >
)
