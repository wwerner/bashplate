import * as React from "react";
import { OptionData } from "~model"

export const Option = (data: OptionData) => (
    <div>
        <b>Option {data.longName}</b>
        <ul>
            <li>required:{data.required}</li>
            <li>shortName:{data.shortName}</li>
            <li>longName:{data.longName}</li>
            <li>description:{data.description}</li>
            <li>isFlag: {data.isFlag}</li>
            <li>defaultValue:{data.defaultValue}</li>
            <li>functionCall:{data.functionCall}</li>
            <li>exitCode:{data.exitCode}</li>
        </ul>
    </div>
)