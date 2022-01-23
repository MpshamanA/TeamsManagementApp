import React from "react";
import { Header } from "../components/Header";
import * as H from "history";

type PropType = {
  history: H.History;
};
export const Main: React.FC<PropType> = ({ history }) => {
  return <Header history={history} />;
};
