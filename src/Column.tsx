import * as React from "react";
import Card from "./Card";

export default () => {
  const cards: Card[] = [
    <Card key="1" description="card 1" />,
    <Card key="2" description="card 2" />
  ];
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column"
      }}
    >
      {cards}
    </div>
  );
};
