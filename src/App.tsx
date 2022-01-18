import { useLayoutEffect, useState } from "react";
import "./css/App.css";
import { Side } from "./components/Side";
import { Main } from "./views/Main";
import { RouteComponentProps } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const App: React.FC<RouteComponentProps> = (props) => {
  const auth = getAuth();
  // ユーザー情報を保持する
  const [user, setUser] = useState(auth.currentUser);
  //ユーザー判定 ユーザー情報を保持していない場合新規登録画面へ
  useLayoutEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
      !user && props.history.push("signUp");
    });
    // return () => {
    //   !user && props.history.push("signUp");
    // };
  }, []);

  return (
    <div className="App flex flex-vertical">
      <div className="content-body flex flex-vertical flex-1">
        <Main history={props.history} signUpUserName={user?.email!} />
        <Side />
      </div>
    </div>
  );
};

export default App;
