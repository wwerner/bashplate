import * as React from "react";
import { Result, Options } from "~components";
import { OptionData, ResultData } from "~model";

type GeneratorProps = {
    options: OptionData[],
    result: ResultData,
    onAddOption: () => void,
    onChangeOption: (option: OptionData) => void,
    onRemoveOption: (option: OptionData) => void,
}

export const Generator = ({ options, result, onAddOption, onChangeOption, onRemoveOption}: GeneratorProps) => {
    return (
        <div className="section">
            <h2 className="subtitle">Bash Plate lets you generate boilerplate for shell scripts that takes care of receiving, parsing,
      validating and documenting script arguments.</h2>
            <Options 
                options={options} 
                onAddOption={onAddOption}
                onChangeOption={onChangeOption}
                onRemoveOption={onRemoveOption}
                />

            <Result {...result} />
        </div>
    )
}