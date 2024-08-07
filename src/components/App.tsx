import React from "react";
import MainSection from "./MainSection";
import store from "../store";
import { Provider } from "react-redux";
import { Analytics } from "@vercel/analytics/react";

function App() {
  return (
    <Provider store={store}>
      <MainSection />
      <Analytics />
    </Provider>
  );
}

export default App;
