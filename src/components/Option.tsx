import React, { ChangeEvent, useState } from "react";
import { OptionData } from "~model"

interface OptionProps {
    data: OptionData,
    onChange: (data: OptionData) => void,
    onRemove: (data: OptionData) => void,
}

export const Option = ({ data, onChange, onRemove }: OptionProps) => {
    const updatedData = (key: string, value: boolean | string | number) =>
        ({ ...data, [key]: [value] })

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.currentTarget.type === 'checkbox'
            ? e.currentTarget.checked
            : e.currentTarget.value;
        onChange(updatedData(e.currentTarget.name, value))
    }

    return (
        <tr>
            <td>
                <input type="checkbox" name='required' checked={!!data.required} onChange={handleChange} />
            </td>
            <td>
                <input className="input" name='shortName' defaultValue={data.shortName} onChange={handleChange} type="text" size={1} maxLength={1} />
            </td>
            <td>
                <input className="input" name='longName' defaultValue={data.longName} onChange={handleChange} type="text" size={9} maxLength={25} />
            </td>
            <td>
                <input className="input" name='description' defaultValue={data.description} onChange={handleChange} type="text" size={25} maxLength={150} />
            </td>
            <td>
                <input type="checkbox" name='isFlag' checked={!!data.isFlag} onChange={handleChange} />
            </td>
            <td>
                <input className="input" name='defaultValue' defaultValue={data.defaultValue} onChange={handleChange} type="text" size={10} maxLength={50} />
            </td>
            <td>
                <input className="input" name='functionCall' defaultValue={data.functionCall} onChange={handleChange} type="text" size={10} maxLength={30} />
            </td>
            <td>
                <input className="input" name='exitCode' defaultValue={data.exitCode} onChange={handleChange} type="number" min={0} step={1} max={255} />
            </td>
            <td>
                <a className="button is-danger is-inverted" onClick={() => onRemove(data)}>
                    <span className="icon"><i className="fas fa-times"></i></span>
                </a>
            </td>
        </tr >
    )
}