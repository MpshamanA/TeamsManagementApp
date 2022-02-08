import React from "react";

import Button from "@mui/material/Button";

import { Store } from "../Type";

type Props = {
  store: Store;
  handleDone: (store: Store) => void;
  handleDelete: () => void;
};

export const Item: React.FC<Props> = ({ store, handleDone, handleDelete }) => {
  return (
    <li className={store.done ? "done" : ""}>
      <label>
        <input
          type="checkbox"
          className="checkbox-input"
          onClick={() => handleDone(store)}
          defaultChecked={store.done}
        />
        <span className="checkbox-label">{store.storeName} </span>
      </label>
      <span>{store.updateUser} </span>
      <span>{store.updateTime} </span>
      <Button
        variant="contained"
        size="small"
        color="error"
        onClick={handleDelete}
      >
        削除
      </Button>
    </li>
  );
};
