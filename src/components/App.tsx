import React from "react";
import MainSection from "./MainSection";
import store from "../store";
import { Provider } from "react-redux";
import { Analytics } from "@vercel/analytics/react";
import CustomDialog from "./dialog/CustomDialog";

function App() {
  return (
    <Provider store={store}>
      <MainSection />
      <Analytics />
      <CustomDialog />
    </Provider>
  );
}

export default App;
