import React, { useState } from "react";
import "../css/Items.css";
import { Store } from "../Type";

type Props = {
  stores: Store[];
  setStores: React.Dispatch<React.SetStateAction<any[]>>;
};

//値を親に渡してfirebaseに登録するロジックを作成する
export const ItemInput: React.FC = () => {
  const [inputStore, setInputStore] = useState("");
  const handoleSubmit = () => {};
  const hundleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputStore(e.target.value);
  };
  return (
    //mapで回す場合keyは必須
    <div className="inner">
      <div className="input-form">
        <p>実際に使用できたお店を入力する</p>
        <div className="inner">
          <input
            type="text"
            className="input"
            value={inputStore}
            onChange={hundleInputChange}
          />
          <button className="btn is-primary" onClick={handoleSubmit}>
            追加
          </button>
        </div>
      </div>
    </div>
  );
};
