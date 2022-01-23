import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Teams from "./views/Teams";
import benefits from "./views/Benefits";
import Calendar from "./views/Calendar";
import AvailableStores from "./views/AvailableStores";
import reportWebVitals from "./reportWebVitals";
import Qa from "./views/Qa";
import SignUp from "./views/SignUp";
import { Route, BrowserRouter } from "react-router-dom";
import SignIn from "./views/SignIn";

//routeの設定
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <div>
        <Route exact path="/" component={App} />
        <Route exact path="/teams" component={Teams} />
        <Route exact path="/benefits" component={benefits} />
        <Route exact path="/calendar" component={Calendar} />
        <Route exact path="/availableStores" component={AvailableStores} />
        <Route exact path="/qa" component={Qa} />
        <Route exact path="/signUp" component={SignUp} />
        <Route exact path="/signIn" component={SignIn} />
      </div>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
