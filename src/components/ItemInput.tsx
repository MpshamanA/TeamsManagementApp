import React, { useState } from "react";
import "../css/Items.css";
import { Store } from "../Type";

type Props = {
  stores: Store[];
  inputStore: string;
  setInputStore: React.Dispatch<React.SetStateAction<string>>;
  handleSubmit: () => void;
  hundleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

//値を親に渡してfirebaseに登録するロジックを作成する
export const ItemInput: React.FC<Props> = ({
  stores,
  inputStore,
  setInputStore,
  handleSubmit,
  hundleInputChange,
}) => {
  // const [inputStore, setInputStore] = useState("");
  // const [count, setCount] = useState(stores.length + 1);

  // const hundleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setInputStore(e.target.value);
  // };

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
