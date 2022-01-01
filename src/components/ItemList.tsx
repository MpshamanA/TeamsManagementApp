import React, { useCallback, useLayoutEffect } from "react";
import { Item } from "./Item";
import { Store } from "../Type";

type Props = {
  stores: Store[];
};
export const ItemList: React.FC<Props> = ({ stores }) => {
  return (
    //mapで回す場合keyは必須
    <div className="inner">
      <h1>使用できたお店一覧</h1>
      {stores.length <= 0 ? (
        "登録されたお店はありません"
      ) : (
        <ul>
          {stores.map((store) => (
            <Item key={store.id} store={store} />
          ))}
        </ul>
      )}
    </div>
  );
};
