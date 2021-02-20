import React, { useEffect, useRef } from "react"
import Prism from 'prismjs'
import { ResultData, Dialects } from '~model'
import FileSaver from 'file-saver';

interface ResultProps {
    result: ResultData,
    onChangeDialect: any
}

export const Result = ({ result, onChangeDialect }: ResultProps) => {

    useEffect(() => {
        setTimeout(() => Prism.highlightAll(), 0)
    }, [result.script])

    const save = () => {
        const blob = new Blob([result.script], { type: 'text/plain;charset=utf-8' })
        FileSaver.saveAs(blob, 'bashplate.sh')
    }

    const copy = () => {
        navigator.clipboard.writeText(result.script)
    }

    return (
        <div className="result-script">
            <div className="tabs">
                <ul>
                    <li><a
                        className={result.dialect === Dialects.posix ? 'is-active' : ''}
                        onClick={() => onChangeDialect(Dialects.posix)}
                    >POSIX</a></li>
                    <li><a
                        onClick={() => onChangeDialect(Dialects.gnu)}
                        className={result.dialect === Dialects.gnu ? 'is-active' : ''}
                    >GNU (w/ --long-opts)</a></li>
                </ul>
            </div >

            <pre>
                <a className="button is-outlined is-link is-inverted is-pulled-right"
                    style={{ marginLeft: "1vh" }}
                    onClick={copy}
                >
                    <span>Copy&nbsp;</span>
                    <span className="icon"><i className="fa fa-copy"></i></span>
                </a>
                <a className="button is-outlined is-link is-inverted is-pulled-right" onClick={save} >
                    <span>Download&nbsp;</span>
                    <span className="icon"><i className="fa fa-download"></i></span>
                </a>

                <code className="language-shell">{result.script}</code>
            </pre>
        </div >
    )
}
