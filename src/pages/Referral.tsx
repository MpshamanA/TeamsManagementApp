import React, { useState, useContext } from "react";
import style from "../css/common.module.scss";

import { RouteComponentProps } from "react-router-dom";

import { Header } from "../components/Header";
import { Side } from "../components/Side";
import { manuContext } from "../Store";

const Referral: React.FC<RouteComponentProps> = (prop) => {
  const state = useContext(manuContext);

  return (
    <div className={!state.sideToggle ? style.grid : style.gridSideMin}>
      <div className={style.side}>
        <Side />
      </div>
      <div className={style.header}>
        <Header history={prop.history} />
      </div>
      <div className={style.mainItemList}>メインやデー</div>
    </div>
  );
};

export default Referral;
