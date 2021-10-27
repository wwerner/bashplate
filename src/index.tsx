import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import FileSaver from "file-saver";
import Pizzly from "pizzly-js";
import "bulma";
import "./index.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navigation, Footer } from "~components";
import { About, Generator } from "~views";

import {
  defaultScriptDescription,
  defaultOptions,
  OptionData,
  Dialects,
  templates,
} from "~model";

const App = () => {
  const [options, setOptions] = useState(defaultOptions);
  const [dialect, setDialect] = useState(Dialects.posix);
  const [scriptDescription, setScriptDescription] = useState(
    defaultScriptDescription
  );
  const [gist, setGist] = useState({});
  const [gistSuccessModalVisible, setGistSuccessModalVisible] = useState(false);
  const [gistErrorModalVisible, setGistErrorModalVisible] = useState(false);

  const renderScript = (dialect: Dialects): string =>
    templates[dialect]({
      description: scriptDescription,
      requiredOptions: options.filter((o) => o.required),
      flagOptions: options.filter((o) => o.isFlag),
      parameterOptions: options.filter((o) => !o.isFlag),
      callingOptions: options.filter(
        (o) =>
          o.functionCall &&
          o.functionCall !== "usage" &&
          o.functionCall !== "version"
      ),
      options: options.map((o) => ({
        ...o,
        // trick handlebars into rendering 0 as exit code. 0 is false for #if, "0" isn't
        exitCode: o.exitCode === 0 ? "0" : o.exitCode,
      })),
    });

  const [result, setResult] = useState({
    description: scriptDescription,
    script: renderScript(dialect),
    dialect: dialect,
  });

  useEffect(() => {
    setResult({
      description: scriptDescription,
      script: renderScript(dialect),
      dialect: dialect,
    });
  }, [options, dialect, scriptDescription]);

  const onRemoveOption = (option: OptionData) =>
    setOptions(options.filter((o) => o.id !== option.id));

  const onAddOption = () =>
    setOptions(
      options.concat({ id: options[options.length - 1].id + 1 } as OptionData)
    );

  const onChangeOption = (data: OptionData) =>
    setOptions(options.map((o) => (o.id === data.id ? data : o)));

  const onChangeDialect = (dialect: Dialects) => setDialect(dialect);

  const onSave = () => {
    const blob = new Blob([result.script], {
      type: "text/plain;charset=utf-8",
    });
    FileSaver.saveAs(blob, "bashplate.sh");
  };

  const onCopy = () => {
    navigator.clipboard.writeText(result.script);
  };

  const onCreateGist = () => {
    const pizzly = new Pizzly({
      host: "https://bashplate-oauth.herokuapp.com/",
      publishableKey: "poUDkGprMhTt87VZbttW",
    });

    const github = pizzly.integration("github", {
      setupId: "329a658d-d273-4ce0-aa0e-dadf444930bf",
    });

    github
      .connect()
      .then(({ authId }) => {
        const filename = `bashplate-${Date.now()}.sh`;
        console.log(authId, filename);

        const body = {
          description: result.description,
          public: true,
          files: {
            [filename]: {
              content: result.script,
            },
          },
        };

        return github.auth(authId).post("/gists", {
          body: JSON.stringify(body),
        });
      })
      .then(async (res) => {
        const body = await res.json();
        if (!res.ok) {
          throw new Error(body.message);
        }
        return body;
      })
      .then((json) => {
        setGist(json);
        setGistSuccessModalVisible(true);
      })
      .catch((err) => {
        setGist(err);
        setGistErrorModalVisible(true);
      });
  };

  const handleCloseGistDialog = () => {
    setGistErrorModalVisible(false);
    setGistSuccessModalVisible(false);
    setGist({});
  };

  return (
    <div id="app" className="section">
      <Router>
        <Navigation />
        {/* TODO: Success Modal should go into new FeedbackModal component */}
        <div className={gistSuccessModalVisible ? "modal is-active" : "modal"}>
          <div
            className="modal-background"
            onClick={handleCloseGistDialog}
          ></div>
          <div className="modal-content">
            <div className="box">
              <div className="media">
                <div className="media-left">
                  <i className="fab fa-4x fa-github has-text-success"></i>
                </div>
                <div className="media-content">
                  <div className="content">
                    <p>
                      Yay! Your script has been published{" "}
                      <a
                        href={
                          // @ts-expect-error: Don't want to include GH API types now
                          gist.html_url
                        }
                        target="_blank"
                        rel="noreferrer"
                      >
                        in your Gists
                      </a>
                      .
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button
            className="modal-close is-large"
            aria-label="close"
            onClick={handleCloseGistDialog}
          ></button>
        </div>

        {/* TODO: Error Modal should go into new FeedbackModal component */}
        <div className={gistErrorModalVisible ? "modal is-active" : "modal"}>
          <div
            className="modal-background"
            onClick={handleCloseGistDialog}
          ></div>
          <div className="modal-content">
            <div className="box">
              <div className="media">
                <div className="media-left">
                  <i className="fab fa-4x fa-github has-text-danger"></i>
                </div>
                <div className="media-content">
                  <div className="content">
                    <p>Meh. That did not work.</p>
                    <pre style={{ whiteSpace: "pre-wrap" }}>
                      {
                        // @ts-expect-error: Don't want to include GH API types now
                        gist.message
                      }
                    </pre>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button
            className="modal-close is-large"
            aria-label="close"
            onClick={handleCloseGistDialog}
          ></button>
        </div>

        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <Generator
              scriptDescription={scriptDescription}
              options={options}
              result={result}
              onChangeDescription={setScriptDescription}
              onAddOption={onAddOption}
              onChangeOption={onChangeOption}
              onRemoveOption={onRemoveOption}
              onChangeDialect={onChangeDialect}
              onCopy={onCopy}
              onSave={onSave}
              onCreateGist={onCreateGist}
            />
          </Route>
        </Switch>
      </Router>
      <Footer />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
