import * as React from "react";
import { useForm } from "react-hook-form";
import { RouteComponentProps } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { collection, setDoc, doc } from "firebase/firestore";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { User } from "../Type";
import { Link } from "react-router-dom";
import { db } from "../firebase";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

function Copyright(props: any) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      {"Future SQUARE "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}
const positions = [
  {
    value: "東京本社",
    label: "東京本社",
  },
  {
    value: "名古屋支店",
    label: "名古屋支店",
  },
  {
    value: "大阪支店",
    label: "大阪支店",
  },
  {
    value: "福岡支店",
    label: "福岡支店",
  },
];

const theme = createTheme();

const SignUp: React.FC<RouteComponentProps> = (props) => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<User>();

  //新規登録処理
  const auth = getAuth();
  //ユーザー情報を登録するコレクションを設定
  const usersCollectionRef = collection(db, "Users");
  //required: trueにすることによってデータを取得する
  const handleSignUp = async (data: User) => {
    const { name, position, email, password } = data;
    //認証に成功した場合uidを取得
    let uid: any;
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      props.history.push("/");
      uid = auth.currentUser?.uid;
    } catch (error) {
      alert(error);
      return;
    }
    //認証情報とstore情報をuidで紐付け
    try {
      await setDoc(doc(usersCollectionRef, uid), {
        // id:
        name: name,
        position: position,
        email: email,
      });
    } catch (error) {
      alert(error);
      return;
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            新規登録
          </Typography>
          <Box
            component="form"
            noValidate
            sx={{ mt: 3 }}
            onSubmit={handleSubmit(handleSignUp)}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  required
                  fullWidth
                  id="Name"
                  label="名前"
                  autoFocus
                  {...register("name", {
                    required: true,
                  })}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="position"
                  label="支店"
                  autoComplete="position"
                  {...register("position", {
                    required: true,
                  })}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="メールアドレス"
                  autoComplete="email"
                  error={Boolean(errors.email)}
                  helperText={errors.email}
                  {...register("email", {
                    required: true,
                    pattern:
                      /^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]{1,}\.[A-Za-z0-9]{1,}$/,
                  })}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  label="パスワード"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  error={Boolean(errors.password)}
                  {...register("password", { required: true, minLength: 6 })}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              新規登録
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link to={"/signIn"}>アカウントをお持ちの方はこちら</Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
};

export default SignUp;
