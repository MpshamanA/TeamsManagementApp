import React from "react";
import "./css/App.css";
import { Side } from "./components/Side";
import AvailableStores from "./views/AvailableStores";
import { Main } from "./views/Main";

function App() {
  return (
    <div className="App flex flex-vertical">
      <div className="content-body flex flex-vertical flex-1">
        <Main />
        <Side />
      </div>
    </div>
  );
}

export default App;
