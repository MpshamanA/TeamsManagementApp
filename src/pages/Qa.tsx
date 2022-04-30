import React, { useEffect, useContext } from "react";
import style from "../css/common.module.scss";
import "../css/referral.css";

import { RouteComponentProps } from "react-router-dom";

import { Header } from "../components/Header";
import { Side } from "../components/Side";
import { manuContext } from "../Store";

const Qa: React.FC<RouteComponentProps> = (prop) => {
  const state = useContext(manuContext);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <div className={!state.sideToggle ? style.grid : style.gridSideMin}>
        <div className={style.side}>
          <Side />
        </div>
        <div className={style.header}>
          <Header history={prop.history} />
        </div>
        <div className={style.mainItemList}>よくある質問</div>
      </div>
    </div>
  );
};
export default Qa;
