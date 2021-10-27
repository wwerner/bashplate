import React, { useEffect } from "react";
import Prism from "prismjs";
import { ResultData, Dialects } from "~model";

interface ResultProps {
  result: ResultData;
  onChangeDialect: any;
  onCopy: () => void;
  onSave: () => void;
  onCreateGist: () => void;
}

export const Result = ({
  result,
  onChangeDialect,
  onCopy,
  onSave,
  onCreateGist,
}: ResultProps) => {
  useEffect(() => {
    setTimeout(() => Prism.highlightAll(), 0);
  }, [result.script]);

  return (
    <div className="result-script">
      <div className="tabs" style={{ marginBottom: "-0.3em" }}>
        <ul>
          <li>
            <a
              className={result.dialect === Dialects.posix ? "is-active" : ""}
              onClick={() => onChangeDialect(Dialects.posix)}
            >
              POSIX
            </a>
          </li>
          <li>
            <a
              onClick={() => onChangeDialect(Dialects.gnu)}
              className={result.dialect === Dialects.gnu ? "is-active" : ""}
            >
              GNU (w/ --long-opts)
            </a>
          </li>
        </ul>
      </div>

      <pre style={{ height: "55vh", overflowY: "scroll" }}>
        <a
          className="button is-outlined is-link is-inverted is-pulled-right source-action-button"
          onClick={onCopy}
        >
          <span>Copy&nbsp;</span>
          <span className="icon">
            <i className="fa fa-copy"></i>
          </span>
        </a>
        <a
          className="button is-outlined is-link is-inverted is-pulled-right source-action-button"
          onClick={onSave}
        >
          <span>Download&nbsp;</span>
          <span className="icon">
            <i className="fa fa-download"></i>
          </span>
        </a>
        <a
          className="button is-outlined is-link is-inverted is-pulled-right source-action-button"
          onClick={onCreateGist}
        >
          <span>Create Gist&nbsp;</span>
          <span className="icon">
            <i className="fab fa-github"></i>
          </span>
        </a>

        <code className="language-shell">{result.script}</code>
      </pre>
    </div>
  );
};
