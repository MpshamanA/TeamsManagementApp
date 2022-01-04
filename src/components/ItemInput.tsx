import React, { useState } from "react";
import "../css/Items.css";
import { Store } from "../Type";

type Props = {
  stores: Store[];
  setStores: React.Dispatch<React.SetStateAction<Store[]>>;
  handleSubmit: () => void;
};

//値を親に渡してfirebaseに登録するロジックを作成する
export const ItemInput: React.FC<Props> = ({
  stores,
  setStores,
  handleSubmit,
}) => {
  const [inputStore, setInputStore] = useState("");
  const [count, setCount] = useState(stores.length + 1);

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
          <button className="btn is-primary" onClick={handleSubmit}>
            追加
          </button>
        </div>
      </div>
    </div>
  );
};
