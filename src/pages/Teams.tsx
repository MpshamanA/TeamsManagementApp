import style from "../css/common.module.scss";

import React, { useState, useEffect, useContext } from "react";

import { RouteComponentProps, NavLink } from "react-router-dom";

import Box from "@mui/material/Box";

import { CardItem } from "../components/CardItem";
import { Header } from "../components/Header";
import { Side } from "../components/Side";
import { manuContext } from "../Store";

import { collectionName } from "../config/collections";

import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

const Teams: React.FC<RouteComponentProps> = (prop) => {
  const [users, setUsers] = useState(Array());
  const usersCollectionRef = collection(db, collectionName.USERS);

  //stateを参照
  const state = useContext(manuContext);

  //登録されてるユーザーを取得
  useEffect(() => {
    window.scrollTo(0, 0);
    let unmounted: boolean = false;

    const GetUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    if (!unmounted) {
      GetUsers();
    }
    return () => {
      unmounted = true;
    };
  }, [state]);

  return (
    <div className={!state.sideToggle ? style.grid : style.gridSideMin}>
      <div className={style.side}>
        <Side />
      </div>
      <div className={style.header}>
        <Header history={prop.history} />
      </div>
      <div className={style.mainTeams}>
        <Box sx={{ display: "flex", flexWrap: "wrap" }}>
          {users.map((user) => (
            <NavLink
              exact
              to={`/teams/${user.id}`}
              className="link-bar-none"
              key={user.id}
            >
              <CardItem userName={user.name} position={user.position} />
            </NavLink>
          ))}
        </Box>
      </div>
    </div>
  );
};

export default Teams;
