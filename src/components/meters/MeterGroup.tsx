import React from "react";
import MeterContainer from "./MeterContainer";
import { FaFishFins, FaLungs } from "react-icons/fa6";
import { FaHeartbeat } from "react-icons/fa";
import { useSelector } from "react-redux";
import RootState from "../../features/RootState";

function MeterGroup() {
  const values = useSelector((state: RootState) => state.turtleMonitor.turtle);
  return (
    <>
      <MeterContainer icon={<FaFishFins />} value={values.food.value} />
      <MeterContainer icon={<FaHeartbeat />} value={values.life.value} />
      <MeterContainer icon={<FaLungs />} value={values.oxygen.value} />
    </>
  );
}

export default MeterGroup;
