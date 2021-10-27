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
      .then((res) => res.json())
      .then((json) => console.log(json))
      .catch(console.error);
  };

  return (
    <div id="app" className="section">
      <Router>
        <Navigation />
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
