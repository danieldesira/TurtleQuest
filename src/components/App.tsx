import React from "react";
import MainSection from "./MainSection";
import store from "../store";
import { Provider } from "react-redux";
import { Analytics } from "@vercel/analytics/react";
import CustomDialog from "./dialog/CustomDialog";
import { SuperTokensWrapper } from "supertokens-auth-react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import SuperTokens from "supertokens-auth-react";
import { getSuperTokensRoutesForReactRouterDom } from "supertokens-auth-react/ui";
import { PreBuiltUIList, SuperTokensConfig } from "../auth";

SuperTokens.init(SuperTokensConfig);

function App() {
  return (
    <SuperTokensWrapper>
      <Provider store={store}>
        <Router>
          <Routes>
            {getSuperTokensRoutesForReactRouterDom(
              require("react-router-dom"),
              PreBuiltUIList
            )}
            <Route path="/" element={<MainSection />} />
          </Routes>
        </Router>
        <Analytics />
        <CustomDialog />
      </Provider>
    </SuperTokensWrapper>
  );
}

export default App;
