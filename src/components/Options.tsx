import * as React from "react";
import { OptionData } from "~model";
import { Option } from "~/components";

interface OptionsProps {
  options: OptionData[];
  onAddOption: () => void;
  onChangeOption: (data: OptionData) => void;
  onRemoveOption: (data: OptionData) => void;
}

export const Options = ({
  options,
  onAddOption,
  onChangeOption,
  onRemoveOption,
}: OptionsProps) => (
  <div className="options">
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
        {options.map((option) => (
          <Option
            key={option.id}
            data={option}
            onChange={onChangeOption}
            onRemove={onRemoveOption}
          />
        ))}
        <tr>
          <td colSpan={9}>
            <a className="button is-primary" onClick={() => onAddOption()}>
              <span>Add parameter</span>
              <span className="icon">
                <i className="fas fa-plus"></i>
              </span>
            </a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
);
