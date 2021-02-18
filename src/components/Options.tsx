import * as React from "react";
import { OptionData } from "~model"
import { Option } from "~/components"

export const Options = (options: OptionData[]) => (
    <div>
        <table className="table is-striped is-narrow is-hoverable is-fullwidth">
            <thead>
                <tr>
                    <td>Req.</td>
                    <td>Short</td>
                    <td>Long</td>
                    <td>Description</td>
                    <td>Flag</td>
                    <td>Default</td>
                    <td>Call</td>
                    <td>Exit</td>
                    <td></td>
                </tr>
            </thead>
            <tbody>
                {
                    Object.values(options).map((optionData) => <Option key={optionData.shortName} {...optionData} />)
                }

            </tbody>
        </table>

        <a className="button is-primary">
            <span>Add parameter</span>
            <span className="icon"><i className="fas fa-plus"></i></span>
        </a>
    </div>
)