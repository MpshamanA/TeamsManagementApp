import { DateProfileGenerator } from "@fullcalendar/react";
import React, { useState } from "react";
import { Store } from "../Type";

type Props = {
  store: Store;
};

export const Item: React.FC<Props> = ({ store }) => {
  const [newStore, useNewStore] = useState("");

  return (
    <li className={store.done ? "done" : ""}>
      <label>
        <input
          type="checkbox"
          className="checkbox-input"
          defaultChecked={store.done}
        />
        <span className="checkbox-label">{store.storeName}</span>
      </label>
      <span>{store.updateUser}</span>
      <span>{store.updateTime}</span>
      <button className="btn is-dalete">削除</button>
    </li>
  );
};
