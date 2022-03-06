import style from "../css/common.module.scss";

import React, { useState, useEffect, useContext } from "react";
import { RouteComponentProps } from "react-router-dom";

import { CardProfile } from "../components/CardProfile";
import { Header } from "../components/Header";
import { ProgrammingLanguages } from "../Type";
import { Side } from "../components/Side";
import { manuContext } from "../Store";

import { collectionName } from "../config/collections";

import { db } from "../firebase";
import {
  collection,
  getDocs,
  getDoc,
  doc,
  query,
  where,
} from "firebase/firestore";

import Grid from "@mui/material/Grid";

type id = {
  id: string;
};
//＆はマージではなく intersection という型
type PageProps = {} & RouteComponentProps<id>;

const Team: React.FC<PageProps> = (prop) => {
  const state = useContext(manuContext);
  //正規表現 gは置き換えたい文字列が複数存在しても、すべて置き換えるという指定
  //取得したidからダブルクォートを削除する
  const id: string = prop.match.params.id.replace(/[\"]/g, "");
  const [userName, setUserName] = useState("");
  const [userPositon, setUserPositon] = useState("");
  const [yearsExperience, setYearsExperience] = useState("");
  const [favoritePhase, setFavoritePhase] = useState("");
  const [hobby, setHobby] = useState("");
  const [programmingLanguages, setProgrammingLanguages] = useState<
    ProgrammingLanguages[]
  >([]);
  const usersCollectionRef = collection(db, collectionName.USERS);
  const ProgrammingLanguagesCollectionRef = collection(
    db,
    collectionName.PROGRAMMING_LANGUAGES
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
          setYearsExperience(docSnap.data().yearsExperience);
          setFavoritePhase(docSnap.data().favoritePhase);
          setHobby(docSnap.data().hobby);
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
    //タップされたuser得意なプログラミング言語を取得する
    let unmounted: boolean = false;
    if (id) {
      //idと紐ずくデータを取得
      const q = query(
        ProgrammingLanguagesCollectionRef,
        where("uid", "==", id)
      );
      const getProgrammingLanguages = async () => {
        const querySnapshot = await getDocs(q);
        setProgrammingLanguages(
          querySnapshot.docs.map((doc) => ({ ...doc.data() }))
        );
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
    <div className={!state.sideToggle ? style.grid : style.gridSideMin}>
      <div className={style.side}>
        <Side />
      </div>
      <div className={style.header}>
        <Header history={prop.history} />
      </div>
      <div className={style.mainTeams}>
        <Grid container justifyContent="center" sx={{ mt: "20px" }}>
          <CardProfile
            userName={userName}
            userPositon={userPositon}
            yearsExperience={yearsExperience}
            hobby={hobby}
            favoritePhase={favoritePhase}
            programmingLanguages={programmingLanguages}
          />
        </Grid>
      </div>
    </div>
  );
};

export default Team;
