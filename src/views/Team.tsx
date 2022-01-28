import React, { useState, useEffect } from "react";
import style from "../css/common.module.scss";
import { Header } from "../components/Header";
import { Side } from "../components/Side";
import { RouteComponentProps } from "react-router-dom";

type Props = {
  prop: RouteComponentProps;
};
//ここ理解する
type PageProps = {} & RouteComponentProps<{ id: string }>;

const Team: React.FC<PageProps> = (prop) => {
  const id = prop.match.params.id;
  console.log(id);

  return (
    <div className={style.grid}>
      <div className={style.side}>
        <Side />
      </div>
      <div className={style.header}>
        <Header history={prop.history} />
      </div>
      <div className={style.mainTeams}>{id}</div>
    </div>
  );
};

export default Team;
