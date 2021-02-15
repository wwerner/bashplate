import * as React from "react";
import { Result, Options } from "~components";
import { OptionData, ResultData } from "~model";

type GeneratorProps = {
    options: OptionData[],
    result: ResultData
}

export const Generator = ({ options, result }: GeneratorProps) => {

    console.log('options', options)
    console.log('result', result)
    return (
        <div className="section">
            <h2 className="subtitle">Bash Plate lets you generate boilerplate for shell scripts that takes care of receiving, parsing,
      validating and documenting script arguments.</h2>
            <Options {...options} />

            <Result {...result} />
        </div>
    )
}