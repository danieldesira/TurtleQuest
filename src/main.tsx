import React from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App";

(async () => {

  // function updateMeters() {
  //   const foodMeter = document.getElementById("foodMeter") as HTMLMeterElement;
  //   foodMeter.value = turtle.foodValue;
  //   const lifeMeter = document.getElementById("lifeMeter") as HTMLMeterElement;
  //   lifeMeter.value = turtle.lifeValue;
  //   const oxygenMeter = document.getElementById("oxygenMeter") as HTMLMeterElement;
  //   oxygenMeter.value = turtle.oxygenValue;
  // }
})();
const appRootElement = document.getElementById("app") as HTMLElement;
const root = createRoot(appRootElement);
root.render(<App />);
