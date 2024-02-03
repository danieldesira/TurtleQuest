import React, { useEffect, useState } from "react";
import Turtle from "../../characters/turtle";

interface Props {
  turtle: Turtle;
  _key: string;
}

function GameMeter({ turtle, _key }: Props) {
  const [value, setValue] = useState<number>(100);
  
  const fetchCurrentValue = () => {
    setValue(turtle[_key]);
    requestAnimationFrame(fetchCurrentValue);
  };

  useEffect(() => {
    if (turtle[_key]) {
      fetchCurrentValue();
    } else {
      throw new Error(`GameMeter component: ${_key} does not exist`);
    }
  });

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
