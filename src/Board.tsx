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
      <Column key="1" />
      <Column key="2" />
    </div>
  );
};
