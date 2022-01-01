import React, { useState, useEffect } from "react";
import { Side } from "../components/Side";
import { ItemList } from "../components/ItemList";
import { ItemInput } from "../components/ItemInput";
import "../css/AvailableStores.css";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../fIrebase";

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
  return (
    <div>
      <div className="content-body flex flex-vertical flex-1 flex-row">
        <Side />
        <div className="min-w-100">
          <ItemInput />
          <ItemList stores={stores} />
        </div>
      </div>
    </div>
  );
};

export default AvailableStores;
