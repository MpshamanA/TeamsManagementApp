import React, { useCallback, useLayoutEffect } from "react";
import { Item } from "./Item";
import { Store } from "../Type";

type Props = {
  stores: Store[];
  setStores: React.Dispatch<React.SetStateAction<Store[]>>;
};
export const ItemList: React.FC<Props> = ({ stores, setStores }) => {
  const handleDone = (store: Store) => {
    setStores((prev) =>
      prev.map((s) => (s.id === store.id ? { ...store, done: !store.done } : s))
    );
  };

  const handleDelete = (store: Store) => {
    setStores((prev) => prev.filter((s) => s.id !== store.id));
  };

  return (
    //mapで回す場合keyは必須
    <div className="inner">
      <h1>使用できたお店一覧</h1>
      {stores.length <= 0 ? (
        "登録されたお店はありません"
      ) : (
        <ul>
          {stores.map((store) => (
            <Item
              key={store.id}
              store={store}
              handleDone={handleDone}
              handleDelete={handleDelete}
            />
          ))}
        </ul>
      )}
    </div>
  );
};
