import React, { ChangeEvent } from "react";
import { Result, Options } from "~components";
import { OptionData, ResultData } from "~model";

type GeneratorProps = {
  scriptDescription: string;
  options: OptionData[];
  result: ResultData;
  onChangeDescription: (description: string) => void;
  onAddOption: () => void;
  onChangeOption: (option: OptionData) => void;
  onRemoveOption: (option: OptionData) => void;
  onCopy: () => void;
  onSave: () => void;
  onCreateGist: () => void;
  onChangeDialect: any;
};

export const Generator = ({
  scriptDescription,
  options,
  result,
  onChangeDescription,
  onAddOption,
  onChangeOption,
  onRemoveOption,
  onCopy,
  onSave,
  onCreateGist,
  onChangeDialect,
}: GeneratorProps) => {
  const handleDescriptionChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChangeDescription(e.currentTarget.value);
  };

  return (
    <div className="section">
      <h2 className="subtitle">
        Bash Plate lets you generate boilerplate for shell scripts that takes
        care of receiving, parsing, validating and documenting script arguments.
      </h2>
      <div className="field">
        <div className="control">
          <input
            className="input"
            type="text"
            placeholder="Script Description"
            defaultValue={scriptDescription}
            onChange={handleDescriptionChange}
          />
        </div>
      </div>
      <Options
        options={options}
        onAddOption={onAddOption}
        onChangeOption={onChangeOption}
        onRemoveOption={onRemoveOption}
      />

      <Result
        result={result}
        onChangeDialect={onChangeDialect}
        onCopy={onCopy}
        onSave={onSave}
        onCreateGist={onCreateGist}
      />
    </div>
  );
};
