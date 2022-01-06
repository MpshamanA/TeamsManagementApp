import { DateProfileGenerator } from "@fullcalendar/react";
import React, { useState } from "react";
import { Store } from "../Type";

type Props = {
  store: Store;
  handleDone: (store: Store) => void;
  handleDelete: () => void;
};

export const Item: React.FC<Props> = ({ store, handleDone, handleDelete }) => {
  const [newStore, useNewStore] = useState("");

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
      <button className="btn is-dalete" onClick={handleDelete}>
        削除
      </button>
    </li>
  );
};
