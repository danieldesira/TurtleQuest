import React from "react";
import GameMeter from "./GameMeter";

interface Props {
  _key: string;
  icon: React.ReactElement;
}

function MeterContainer({ _key, icon }: Props) {
  return (
    <div className="flex gap-1">
      {icon}
      <GameMeter _key={_key} />
    </div>
  );
}

export default MeterContainer;
