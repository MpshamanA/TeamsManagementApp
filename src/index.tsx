import React, { useContext } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Teams from "./pages/Teams";
import Team from "./pages/Team";
import Referral from "./pages/Referral";
import AvailableStores from "./pages/AvailableStores";
import reportWebVitals from "./reportWebVitals";
import Qa from "./pages/Qa";
import SignUp from "./pages/SignUp";
import { Route, BrowserRouter } from "react-router-dom";
import SignIn from "./pages/SignIn";
import EditProfile from "./pages/EditProfile";
import { SideContext, BenefitsContext } from "./Store";

//routeの設定
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <BenefitsContext>
        <SideContext>
          <div>
            <Route exact path="/" component={App} />
            <Route exact path="/teams" component={Teams} />
            <Route exact path="/teams/:id" component={Team} />
            <Route exact path="/referral" component={Referral} />
            <Route exact path="/availableStores" component={AvailableStores} />
            <Route exact path="/qa" component={Qa} />
            <Route exact path="/signUp" component={SignUp} />
            <Route exact path="/signIn" component={SignIn} />
            <Route exact path="/editProfile" component={EditProfile} />
          </div>
        </SideContext>
      </BenefitsContext>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
