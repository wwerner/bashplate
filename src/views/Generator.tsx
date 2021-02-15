import * as React from "react";
import { Result, Options } from "~components";
import { DefaultOptions } from "~/options"

export const Generator = () => (
    <div className="section">
        <h2 className="subtitle">Bash Plate lets you generate boilerplate for shell scripts that takes care of receiving, parsing,
      validating and documenting script arguments.</h2>
        <Options {...DefaultOptions} />

        <Result />
    </div>
)
