import React, { ChangeEvent, useState, MouseEventHandler } from "react";
import { OptionData } from "~model"

interface OptionProps {
    data: OptionData,
    onChange: (data: OptionData) => void,
    onRemove: (data: OptionData) => void,
}

export const Option = ({ data: option, onChange, onRemove }: OptionProps) => {
    const updatedOptions = (src: OptionData, updates: {[key: string]: boolean | string | number}) =>
        ({ ...src, ...updates })

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.currentTarget.type === 'checkbox'
            ? e.currentTarget.checked
            : e.currentTarget.value
        const field = e.currentTarget.name

        switch (field) {
            case 'isFlag':
                onChange(updatedOptions(option, {
                    [field]: value,
                    required : false,
                }))
                break
            default:
                onChange(updatedOptions(option, {[field]: value}))
        }
    }

    const handleRemove = () => onRemove(option)

    return (
        <tr>
            <td>
                <input type="checkbox" name='required' checked={option.required} onChange={handleChange} disabled={option.isFlag}/>
            </td>
            <td>
                <input className="input" name='shortName' defaultValue={option.shortName} onChange={handleChange} type="text" size={1} maxLength={1} />
            </td>
            <td>
                <input className="input" name='longName' defaultValue={option.longName} onChange={handleChange} type="text" size={9} maxLength={25} />
            </td>
            <td>
                <input className="input" name='description' defaultValue={option.description} onChange={handleChange} type="text" size={25} maxLength={150} />
            </td>
            <td>
                <input type="checkbox" name='isFlag' defaultChecked={option.isFlag} onChange={handleChange} />
            </td>
            <td>
                <input className="input" name='defaultValue' defaultValue={option.defaultValue} onChange={handleChange} type="text" size={10} maxLength={50} />
            </td>
            <td>
                <input className="input" name='functionCall' defaultValue={option.functionCall} onChange={handleChange} type="text" size={10} maxLength={30} />
            </td>
            <td>
                <input className="input" name='exitCode' defaultValue={option.exitCode} onChange={handleChange} type="number" min={0} step={1} max={255} />
            </td>
            <td>
                <a className="button is-danger is-inverted" onClick={handleRemove}>
                    <span className="icon"><i className="fas fa-times"></i></span>
                </a>
            </td>
        </tr >
    )
}