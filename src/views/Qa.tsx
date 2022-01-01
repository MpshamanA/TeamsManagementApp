import React from "preact/compat";
import { Side } from "../components/Side";

const Qa = () => {
  return (
    <div>
      <div className="content-body flex flex-vertical flex-1 flex-row">
        <Side />
        <h1>よくある質問</h1>
        <ul>
          <li>test</li>
          <p>こうゆうことありますか</p>
          <p>はいあります</p>
        </ul>
      </div>
    </div>
  );
};
export default Qa;
