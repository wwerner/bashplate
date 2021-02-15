import * as React from "react";
import { OptionData } from "~/options"

export const Option = ({
    required,
    shortName,
    longName,
    description,
    isFlag,
    defaultValue,
    functionCall,
    exitCode,
}: OptionData) => (
    <div>
        <b>Option {longName}</b>
        <ul>
            <li>required:{required}</li>
            <li>shortName:{shortName}</li>
            <li>longName:{longName}</li>
            <li>description:{description}</li>
            <li>isFlag:{isFlag}</li>
            <li>defaultValue:{defaultValue}</li>
            <li>functionCall:{functionCall}</li>
            <li>exitCode:{exitCode}</li>
        </ul>
    </div>
)
