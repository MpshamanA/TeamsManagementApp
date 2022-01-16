import React, { useState, useEffect } from "react";
import { Side } from "../components/Side";
import { ItemList } from "../components/ItemList";
import { ItemInput } from "../components/ItemInput";
import "../css/AvailableStores.css";
import {
  collection,
  getDocs,
  addDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";
import { db } from "../firebase";

const AvailableStores = () => {
  const [stores, setStores] = useState(Array());
  //inputタグに入力されたデータ
  const [inputStore, setInputStore] = useState("");

  const storesCollectionRef = collection(db, "Stores");

  //storesに変更があった時にレンダリングされる
  // useEffect(() => {
  //   const GetStores = async () => {
  //     const data = await getDocs(storesCollectionRef);
  //     setStores(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  //   };
  //   GetStores();
  // }, [stores]);
  useEffect(() => {
    const GetStores = async () => {
      const data = await getDocs(storesCollectionRef);
      setStores(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    GetStores();
  }, []);

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
        updateUser: "testUser",
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
