import React from "react";
import { render } from "react-dom";
import { Router, Link } from "@reach/router";
import Results from "./Result";
import Details from "./Detail";

class App extends React.Component {
  render() {
    return (
      <div>
        <Link>
          <h1>Adopt Me</h1>
        </Link>
        <Router>
          <Results path="/" />
          <Details path="/detail/:id" />
        </Router>
      </div>
    );
  }
}

render(React.createElement(App), document.getElementById("root"));
