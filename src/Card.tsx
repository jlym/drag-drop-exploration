import * as React from "react";

export interface Props {
  description: string;
}

export default (props: Props) => (
  <div
    style={{
      border: "solid 2px",
      padding: "30px",
      margin: "5px",
      borderRadius: "7px"
    }}
  >
    {props.description}
  </div>
);
