import style from "../css/common.module.scss";

import React, { useState, useEffect } from "react";

import { RouteComponentProps, NavLink } from "react-router-dom";

import { CardItem } from "../components/CardItem";
import { Header } from "../components/Header";
import { Side } from "../components/Side";
import { sideManuContext } from "../App";

import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

const Teams: React.FC<RouteComponentProps> = (prop) => {
  const [users, setUsers] = useState(Array());
  const usersCollectionRef = collection(db, "Users");
  const [toggle, setToggle] = useState<boolean>(true);
  const hundleSidemanuChange = () => {
    setToggle(!toggle);
  };

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
    <div className={toggle ? style.grid : style.gridSideMin}>
      <div className={style.side}>
        <sideManuContext.Provider value={{ toggle, setToggle }}>
          <Side />
        </sideManuContext.Provider>
      </div>
      <div className={style.header}>
        <Header
          history={prop.history}
          hundleSidemanuChange={hundleSidemanuChange}
          isToggle={toggle}
        />
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
