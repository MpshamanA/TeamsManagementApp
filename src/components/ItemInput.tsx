import "../css/Items.css";

import React from "react";

import Button from "@mui/material/Button";

import { Store } from "../Type";

type Props = {
  stores: Store[];
  inputStore: string;
  handleSubmit: () => void;
  hundleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

//値を親に渡してfirebaseに登録するロジックを作成する
export const ItemInput: React.FC<Props> = ({
  stores,
  inputStore,
  handleSubmit,
  hundleInputChange,
}) => {
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
          <Button
            variant="contained"
            size="small"
            color="primary"
            onClick={handleSubmit}
          >
            追加
          </Button>
        </div>
      </div>
    </div>
  );
};
