import React from "react";

interface Props {
  value: number;
}

function GameMeter({ value }: Props) {
  return (
    <meter
      low={30}
      high={60}
      optimum={80}
      max="100"
      min="0"
      value={value}
    ></meter>
  );
}

export default GameMeter;
