import * as React from "react";
import { render } from "react-dom";
import Hello from "./Hello";
import Board from "./Board";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

const App = () => (
  <div style={styles}>
    <Hello name="CodeSandbox" />
    <Board />
  </div>
);

render(<App />, document.getElementById("root"));
