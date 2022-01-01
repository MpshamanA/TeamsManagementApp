import React from "react";
import "../css/side.css";
import { Link } from "react-router-dom";
import logo from "../logo.png";

//選択されてるタグを取得し色を変える
let homeSelect: boolean = true;
let fromSelect: boolean = false;
let testSelect: boolean = false;
let calendarSelect: boolean = false;
let availableStoresSelect: boolean = false;

const toggle = () => {};
export const Side = () => {
  return (
    <div className="order-1">
      <nav>
        <img className="img-logo" src={logo} alt="LOGO" />
        <ul className="side-ul">
          <Link to={"/"} className="link-bar-none">
            <li className="side-menu">Home</li>
          </Link>
          <Link to={"/form"} className="link-bar-none">
            <li className="side-menu">従業員一覧</li>
          </Link>
          <Link to={"/test"} className="link-bar-none">
            <li className="side-menu"> 福利厚生</li>
          </Link>
          <Link to={"/calendar"} className="link-bar-none">
            <li className="side-menu"> Calendar</li>
          </Link>
          <Link to={"/availableStores"} className="link-bar-none">
            <li className="side-menu">チケットレストラン</li>
          </Link>
          <Link to={"/qa"} className="link-bar-none">
            <li className="side-menu">よくあるQA</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
};
