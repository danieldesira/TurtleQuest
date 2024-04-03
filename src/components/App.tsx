import React from "react";
import MainSection from "./MainSection";
import ControlGroup from "./controls/ControlGroup";
import store from "../store";
import { Provider } from "react-redux";
import CustomDialog from "./dialog/CustomDialog";
import { Analytics } from "@vercel/analytics/react";

function App() {
  return (
    <Provider store={store}>
      <MainSection />
      <ControlGroup />
      <CustomDialog />
      <Analytics />
    </Provider>
  );
}

export default App;
