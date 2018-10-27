import * as React from "react";
import Column from "./Column";

export default () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row"
      }}
    >
      <Column key="1" day="Monday" />
      <Column key="2" day="Tuesday" />
    </div>
  );
};
