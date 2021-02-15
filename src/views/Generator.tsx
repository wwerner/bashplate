import * as React from "react";
import { Result, Options } from "~components";
import { OptionData } from "~options";

export const Generator = (options: OptionData[]) => (
    <div className="section">
        <h2 className="subtitle">Bash Plate lets you generate boilerplate for shell scripts that takes care of receiving, parsing,
      validating and documenting script arguments.</h2>
        <Options {...options} />

        <Result />
    </div>
)
