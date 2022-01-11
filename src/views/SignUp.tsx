import * as React from "react";
import { useState, useEffect } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import {
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { VisibilityOff, Visibility } from "@mui/icons-material";

type State = {
  amount: string;
  password: string;
  weight: string;
  weightRange: string;
  showPassword: boolean;
};

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [values, setValues] = React.useState<State>({
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
    showPassword: false,
  });

  const handleChange =
    (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [prop]: event.target.value });
    };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };
  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };
  //firebaseへのユーザーの新規登録
  const auth = getAuth();
  const handleSubmit = (event: any) => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    try {
      createUserWithEmailAndPassword(auth, email.value, password.value).then(
        (userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user.email);
        }
      );
    } catch (error) {
      alert(error);
    }
  };

  const handleChangeEmail = (event: any) => {
    setEmail(event.currentTarget.value);
  };
  const handleChangePassword = (event: any) => {
    setPassword(event.currentTarget.value);
  };

  return (
    <div>
      <h1>ユーザ登録</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>メールアドレス</label>
          <input
            name="email"
            type="email"
            placeholder="email"
            onChange={(event) => handleChangeEmail(event)}
          />
        </div>
        <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">
            Password
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={values.showPassword ? "text" : "password"}
            onChange={(event) => handleChangePassword(event)}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
        {/* <div>
          <label>パスワード</label>
          <input
            name="password"
            type="password"
            placeholder="password"
            onChange={(event) => handleChangePassword(event)}
          />
        </div> */}
        <div>
          <button>登録</button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
