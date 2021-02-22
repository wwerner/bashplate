import * as React from "react";

export const Footer = () => (
  <footer className="footer box">
    <div className="content has-text-centered">
      Bashplate is standing on the shoulders of giants:{" "}
      <a href="https://reactjs.org/">
        <i className="fab fa-react" style={{ color: "gray" }}></i> React.js
      </a>
      , <a href="https://bulma.io/">Bulma</a>,{" "}
      <a href="https://prismjs.com/">
        <i className="fa fa-caret-up" style={{ color: "gray" }}></i> Prism.js
      </a>
      , <a href="https://handlebarsjs.com/">handlebars</a>,{" "}
      <a href="https://github.com">
        <i className="fab fa-github" style={{ color: "gray" }}></i> Github
      </a>{" "}
      and <a href="https://vercel.com">Vercel</a>. Built with{" "}
      <i className="fa fa-heart" style={{ color: "hotpink" }}></i> by{" "}
      <a href="https://wolfgang-werner.net">this guy</a>.
    </div>
  </footer>
);
