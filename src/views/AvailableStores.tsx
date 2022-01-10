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

  useEffect(() => {
    const GetStores = async () => {
      const data = await getDocs(storesCollectionRef);
      setStores(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    GetStores();
  }, []);

  //fireBaseにデータを追加する
  const handleSubmit = async () => {
    await addDoc(storesCollectionRef, {
      id: stores.length + 1,
      storeName: inputStore,
      updateUser: "test",
      updateTime: "20220106",
      done: false,
    });
    setInputStore("");
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
        {/* <div className="sticky"> */}
        <Side />
        {/* </div> */}
        <div className="min-w-100">
          <ItemInput
            stores={stores}
            inputStore={inputStore}
            setInputStore={setInputStore}
            handleSubmit={handleSubmit}
            hundleInputChange={hundleInputChange}
          />
          <ItemList
            stores={stores}
            setStores={setStores}
            handleDelete={handleDelete}
          />
        </div>
      </div>
    </div>
  );
};

export default AvailableStores;
