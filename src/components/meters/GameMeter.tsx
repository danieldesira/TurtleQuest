import React, { useEffect, useState } from "react";
import Game from "../../Game";

interface Props {
  _key: string;
}

function GameMeter({ _key }: Props) {
  const [value, setValue] = useState<number>(100);
  const turtle = Game.instance.turtle;
  
  const fetchCurrentValue = () => {
    setValue(turtle[_key]);
    requestAnimationFrame(fetchCurrentValue);
  };

  useEffect(() => {
    if (typeof turtle[_key] === "number") {
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
