import React, { useState, useEffect } from "react";
import { Side } from "../components/Side";
import { ItemList } from "../components/ItemList";
import { ItemInput } from "../components/ItemInput";
import "../css/AvailableStores.css";
import { collection, getDocs, addDoc } from "firebase/firestore";
import { db } from "../firebase";

const AvailableStores = () => {
  const [stores, setStores] = useState(Array());

  const storesCollectionRef = collection(db, "Stores");

  useEffect(() => {
    const GetStores = async () => {
      const data = await getDocs(storesCollectionRef);
      setStores(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    GetStores();
  }, []);

  //登録は
  // const handleSubmit = async () => {
  //   addDoc(storesCollectionRef, {});
  // };
  //追加ボタンを押された際のメソッド
  const handleSubmit = () => {
    console.log("testSubmit");
  };

  return (
    <div>
      <div className="content-body flex flex-vertical flex-1 flex-row">
        <Side />
        <div className="min-w-100">
          <ItemInput
            stores={stores}
            setStores={setStores}
            handleSubmit={handleSubmit}
          />
          <ItemList stores={stores} setStores={setStores} />
        </div>
      </div>
    </div>
  );
};

export default AvailableStores;
