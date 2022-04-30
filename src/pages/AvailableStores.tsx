import React, { useState, useEffect, useContext } from "react";

import "../css/AvailableStores.css";
import style from "../css/common.module.scss";

import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import { RouteComponentProps } from "react-router-dom";

import { Header } from "../components/Header";
import { Side } from "../components/Side";
import { ItemList } from "../components/ItemList";
import { ItemInput } from "../components/ItemInput";
import { db } from "../firebase";
import { manuContext } from "../Store";
import TicketRestarant from "../images/TicketRestarant.png";

import { collectionName } from "../config/collections";

import {
  collection,
  getDocs,
  getDoc,
  addDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";
import { onAuthStateChanged, Auth, getAuth } from "firebase/auth";

const AvailableStores: React.FC<RouteComponentProps> = (props) => {
  const auth: Auth = getAuth();
  const state = useContext(manuContext);

  const [stores, setStores] = useState(Array());
  //ログインしてるユーザーネーム
  const [userName, setUserName] = useState("");
  //inputタグに入力されたデータ
  const [inputStore, setInputStore] = useState("");
  const storesCollectionRef = collection(db, collectionName.STORES);
  const usersCollectionRef = collection(db, collectionName.USERS);

  //storesに変更があった時にレンダリングされる
  useEffect(() => {
    window.scrollTo(0, 0);
    //メモリリーク回避：非同期処理が完了する前にコンポーネントがアンマウントされると、ステートは更新されない
    let unmounted: boolean = false;
    const GetStores = async () => {
      const data = await getDocs(storesCollectionRef);
      setStores(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    if (!unmounted) {
      GetStores();
    }
    return () => {
      unmounted = true;
    };
  }, []);

  useEffect(() => {
    //現在ログインしているユーザーを取得する
    let unmounted: boolean = false;
    onAuthStateChanged(auth, (resUser) => {
      if (resUser) {
        const getUserName = async () => {
          const docRef = doc(usersCollectionRef, resUser!.uid);
          const docSnap = await getDoc(docRef);
          //データが存在しない場合、スナップショットから返されるのは、exists() を呼び出した場合は false
          if (docSnap.exists()) {
            //現在ログインしているユーザーの名前を取得する
            setUserName(docSnap.data().name);
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
    });
  }, []);

  //現在の日付を取得
  const dateInfo: Date = new Date();
  const fullYear: string = dateInfo.getFullYear().toString();
  const month: number = dateInfo.getMonth() + 1;
  const date: string = dateInfo.getDate().toString();

  //fireBaseにデータを追加する
  const handleSubmit = async () => {
    try {
      await addDoc(storesCollectionRef, {
        id: stores.length + 1,
        storeName: inputStore,
        updateUser: userName,
        updateTime: `${fullYear}/${month.toString()}/${date}`,
        done: false,
      });
      setInputStore("");
    } catch (error) {
      alert(error);
    }
  };
  const hundleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputStore(e.target.value);
  };
  //firebaseのデータを削除
  const handleDelete = async (id: any) => {
    const storeDoc = doc(db, collectionName.STORES, id);
    await deleteDoc(storeDoc);
  };

  return (
    <div className={!state.sideToggle ? style.grid : style.gridSideMin}>
      <div className={style.side}>
        <Side />
      </div>
      <div className={style.header}>
        <Header history={props.history} />
      </div>
      <div className={style.mainItemList}>
        <Card sx={{ width: "200px", mt: 2, ml: 2 }}>
          <img
            src={TicketRestarant}
            alt="チケットレストラン"
            className="TicketRestarant-img"
          />
        </Card>

        <Card sx={{ mt: 2, ml: 2, mr: 2 }}>
          <Grid display="flex" flexWrap="wrap" sx={{ mt: 3, flexWrap: "wrap" }}>
            <h1 className="pl-10">使用できた店舗一覧</h1>
            <Box sx={{ ml: 3 }}>
              <ItemInput
                stores={stores}
                inputStore={inputStore}
                handleSubmit={handleSubmit}
                hundleInputChange={hundleInputChange}
              />
            </Box>
          </Grid>
          <ItemList stores={stores} handleDelete={handleDelete} />
        </Card>
      </div>
    </div>
  );
};

export default AvailableStores;
