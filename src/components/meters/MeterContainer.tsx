import React from "react";
import GameMeter from "./GameMeter";

interface Props {
  value: number;
  icon: React.ReactElement;
}

function MeterContainer({ value, icon }: Props) {
  return (
    <div className="flex gap-1">
      {icon}
      <GameMeter value={value} />
    </div>
  );
}

export default MeterContainer;
