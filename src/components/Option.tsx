import React, { useState } from "react";
import { OptionData } from "~model"

interface OptionProps {
    data: OptionData,
    onRemove: (data: OptionData) => void
}

export const Option = ({ data, onRemove }: OptionProps) => {
    const [_, setOptions] = useState(data)

    let updateRequire = (e: React.FormEvent<HTMLInputElement>) => {
        console.log(e.currentTarget?.value)
    }

    let updateFlag = (e: React.FormEvent<HTMLInputElement>) => {
        //data.isFlag = e.currentTarget?.value ? true : false
        //setOptions(data)
    }

    return (
        <tr>
            <td>
                <input type="checkbox" checked={data.required} onChange={updateRequire} />
            </td>
            <td>
                <input className="input" defaultValue={data.shortName} type="text" size={1} maxLength={1} />
            </td>
            <td>
                <input className="input" defaultValue={data.longName} type="text" size={9} maxLength={25} />
            </td>
            <td>
                <input className="input" defaultValue={data.description} type="text" size={25} maxLength={150} />
            </td>
            <td>
                <input type="checkbox" checked={data.isFlag} onChange={updateFlag} />
            </td>
            <td>
                <input className="input" defaultValue={data.defaultValue} type="text" size={10} maxLength={50} />
            </td>
            <td>
                <input className="input" defaultValue={data.functionCall} type="text" size={10} maxLength={30} />
            </td>
            <td>
                <input className="input" defaultValue={data.exitCode} type="number" min={0} step={1} max={255} />
            </td>
            <td>
                <a className="button is-danger is-inverted" onClick={() => onRemove(data)}>
                    <span className="icon"><i className="fas fa-times"></i></span>
                </a>
            </td>
        </tr >
    )
}