import React, { useState, useEffect, useLayoutEffect } from "react";
import { Side } from "../components/Side";
import { ItemList } from "../components/ItemList";
import { ItemInput } from "../components/ItemInput";
import "../css/AvailableStores.css";
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
import { db } from "../firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { async } from "@firebase/util";

const AvailableStores = () => {
  const auth = getAuth();
  const [stores, setStores] = useState(Array());
  const [userName, setUserName] = useState("");
  //ログインしているユーザーを取得
  const [user, setUser] = useState(auth.currentUser);
  //inputタグに入力されたデータ
  const [inputStore, setInputStore] = useState("");
  const storesCollectionRef = collection(db, "Stores");
  const usersCollectionRef = collection(db, "Users");

  // const uid = auth.currentUser?.uid;

  //storesに変更があった時にレンダリングされる
  useEffect(() => {
    const GetStores = async () => {
      const data = await getDocs(storesCollectionRef);
      setStores(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      console.log("呼ばれたよ");
    };
    GetStores();
  }, []);
  //リロードした時にログイン情報を保持できていない↓
  useEffect(() => {
    // setUid(auth.currentUser!.uid);
    setUser(auth.currentUser);
    const getUserName = async () => {
      const docRef = doc(usersCollectionRef, user!.uid);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setUserName(docSnap.data().name);
      } else {
        setUserName("NULL");
      }
    };
    getUserName();
  }, []);

  // const test = useMemo(() => {
  //   const GetStores = async () => {
  //     const data = await getDocs(storesCollectionRef);
  //     setStores(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  //     console.log("呼ばれたよ");
  //   };
  //   GetStores();
  // }, []);

  //今日の日付を取得
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
    const storeDoc = doc(db, "Stores", id);
    await deleteDoc(storeDoc);
  };

  return (
    <div>
      <div className="content-body flex flex-vertical flex-1 flex-row">
        <Side />
        <div className="min-calc">
          <ItemInput
            stores={stores}
            inputStore={inputStore}
            handleSubmit={handleSubmit}
            hundleInputChange={hundleInputChange}
          />
          <h1 className="pl-10">使用できた店舗一覧</h1>
          <ItemList stores={stores} handleDelete={handleDelete} />
        </div>
      </div>
    </div>
  );
};

export default AvailableStores;
