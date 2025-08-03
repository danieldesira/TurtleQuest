import LevelText from "./LevelText";
import MeterGroup from "./meters/MeterGroup";
import XPText from "./XPText";
import BackButton from "./BackButton";

const GameHeader = () => (
  <div className="fixed top-1 left-1 flex text-white gap-5 items-center">
    <BackButton />
    <MeterGroup />
    <XPText />
    <LevelText />
  </div>
);

export default GameHeader;
