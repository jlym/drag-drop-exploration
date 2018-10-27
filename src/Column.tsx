import * as React from "react";
import Card from "./Card";

interface Props {
  day: string;
}

export default (props: Props) => {
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
      <div>{props.day}</div>
      {cards}
    </div>
  );
};
