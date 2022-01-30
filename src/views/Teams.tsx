import React, { useState, useEffect } from "react";
import style from "../css/common.module.scss";
import { Header } from "../components/Header";
import { Side } from "../components/Side";
import { RouteComponentProps } from "react-router-dom";
import { CardItem } from "../components/CardItem";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import { NavLink } from "react-router-dom";
import Card from "@mui/material/Card";
import { minWidth } from "@mui/system";

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
            to={`/teams/"${user.id}"`}
            className="link-bar-none"
            key={user.id}
          >
            <Card
              sx={{
                backgroundColor: "#eee",
                m: "10px",
                p: "10px",
                minWidth: "415px",
              }}
            >
              <CardItem userName={user.name} position={user.position} />
            </Card>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Teams;
