import React, { useState, useEffect } from "react";
import style from "../css/common.module.scss";
import { Header } from "../components/Header";
import { Side } from "../components/Side";
import { RouteComponentProps } from "react-router-dom";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import NoImage from "../images/noImage.png";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { db } from "../firebase";
import {
  Firestore,
  collection,
  getDocs,
  getDoc,
  addDoc,
  doc,
  deleteDoc,
  getDocFromCache,
} from "firebase/firestore";
import { NavLink } from "react-router-dom";
import { ProgrammingLanguages } from "../Type";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import { CardProfile } from "../components/CardProfile";

type id = {
  id: string;
};
//＆はマージではなく intersection という型
type PageProps = {} & RouteComponentProps<id>;

const Team: React.FC<PageProps> = (prop) => {
  //正規表現 gは置き換えたい文字列が複数存在しても、すべて置き換えるという指定
  //取得したidからダブルクォートを削除する
  const id: string = prop.match.params.id.replace(/[\"]/g, "");
  const [userName, setUserName] = useState("");
  const [userPositon, setUserPositon] = useState("");
  const [careerPlan, setCareerPlan] = useState("NoData");
  const [programmingLanguages, setProgrammingLanguages] = useState<
    ProgrammingLanguages[]
  >([]);
  const usersCollectionRef = collection(db, "Users");
  const ProgrammingLanguagesCollectionRef = collection(
    db,
    "ProgrammingLanguages"
  );

  useEffect(() => {
    //タップされたuserの情報を取得する
    let unmounted: boolean = false;
    if (id) {
      const getUserName = async () => {
        const docRef = doc(usersCollectionRef, id);
        const docSnap = await getDoc(docRef);

        //データが存在しない場合、スナップショットから返されるのは、exists() を呼び出した場合は false
        if (docSnap.exists()) {
          //現在ログインしているユーザーの情報を取得する
          setUserName(docSnap.data().name);
          setUserPositon(docSnap.data().position);
          setCareerPlan(docSnap.data().CareerPlan);
        } else {
          setUserName("NULL");
        }
      };
      if (!unmounted) {
        getUserName();
      }
      return () => {
        unmounted = true;
      };
    }
  }, []);

  useEffect(() => {
    //タップされたuserの情報を取得する
    let unmounted: boolean = false;
    if (id) {
      const getProgrammingLanguages = async () => {
        const data = await getDocs(ProgrammingLanguagesCollectionRef);
        setProgrammingLanguages(data.docs.map((doc) => ({ ...doc.data() })));
      };
      if (!unmounted) {
        getProgrammingLanguages();
      }
      return () => {
        unmounted = true;
      };
    }
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
        <CardProfile
          userName={userName}
          userPositon={userPositon}
          careerPlan={careerPlan}
          programmingLanguages={programmingLanguages}
        />
      </div>
    </div>
  );
};

export default Team;
