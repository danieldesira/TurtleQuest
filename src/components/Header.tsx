import React from "react";
import { FaFishFins } from "react-icons/fa6";
import { FaHeartbeat } from "react-icons/fa";
import { FaLungs } from "react-icons/fa";
import MeterContainer from "./meters/MeterContainer";
import { useSelector } from "react-redux";
import RootState from "../features/RootState";

function Header() {
  const level = useSelector((state: RootState) => state.levels.level.value);
  return (
    <div className="fixed top-1 left-1 flex text-white gap-5">
      <MeterContainer icon={<FaFishFins />} _key="foodValue" />
      <MeterContainer icon={<FaHeartbeat />} _key="lifeValue" />
      <MeterContainer icon={<FaLungs />} _key="oxygenValue" />
      <span>Level {level}</span>
    </div>
  );
}

export default Header;
