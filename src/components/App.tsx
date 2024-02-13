import React from "react";
import GameCanvas from "./GameCanvas";
import Footer from "./Footer";
import ControlGroup from "./controls/ControlGroup";
import Header from "./Header";
import Dialog from "./Dialog";
import store from "../store";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <Header />
      <GameCanvas />
      <ControlGroup />
      <Dialog />
      <Footer />
    </Provider>
  );
}

export default App;
