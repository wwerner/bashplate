import * as React from "react";
import { OptionData } from "~model"

export const Option = (data: OptionData) => (
    <tr>
        <td>
            <input type="checkbox" />
        </td>
        <td>
            <input className="input" type="text" size={1} maxLength={1} />
        </td>
        <td>
            <input className="input" type="text" size={9} maxLength={25} />
        </td>
        <td>
            <input className="input" type="text" size={25} maxLength={150} />
        </td>
        <td>
            <input type="checkbox" />
        </td>
        <td>
            <input className="input" type="text" size={10} maxLength={50} />
        </td>
        <td>
            <input className="input" type="text" size={10} maxLength={30} />
        </td>
        <td>
            <input className="input" type="number" min={0} step={1} max={255} />
        </td>
        <td>
            <a className="button is-danger is-inverted" >
                <span className="icon"><i className="fas fa-times"></i></span>
            </a>
        </td>
    </tr >
)