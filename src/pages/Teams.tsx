import style from "../css/common.module.scss";

import React, { useState, useEffect } from "react";

import { RouteComponentProps, NavLink } from "react-router-dom";

import { CardItem } from "../components/CardItem";
import { Header } from "../components/Header";
import { Side } from "../components/Side";

import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

const Teams: React.FC<RouteComponentProps> = (prop) => {
  const [users, setUsers] = useState(Array());
  const usersCollectionRef = collection(db, "Users");

  //登録されてるユーザーを取得
  useEffect(() => {
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
  }, []);

  return (
    <div className={style.grid}>
      <div className={style.side}>
        <Side />
      </div>
      <div className={style.header}>
        <Header history={prop.history} />
      </div>
      <div className={style.mainTeams}>
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
      </div>
    </div>
  );
};

export default Teams;
