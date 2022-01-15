import React from "react";
import { Header } from "../components/Header";
import * as H from "history";

type PropType = {
  history: H.History;
  signUpUserName: string;
};
export const Main: React.FC<PropType> = ({ history, signUpUserName }) => {
  return <Header history={history} signUpUserName={signUpUserName} />;
};
