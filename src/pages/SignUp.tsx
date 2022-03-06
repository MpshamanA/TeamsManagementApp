import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { RouteComponentProps } from "react-router-dom";

import { createUserWithEmailAndPassword } from "firebase/auth";
import { getAuth, Auth } from "firebase/auth";
import { collection, setDoc, doc, getDocs } from "firebase/firestore";

import { db } from "../firebase";

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
import { Copyright } from "../components/Copyright";
import { authContext } from "../Store";
import { collectionName } from "../config/collections";

const theme = createTheme();

const SignUp: React.FC<RouteComponentProps> = (props) => {
  const authDataContext = useContext(authContext);

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<User>();

  //新規登録処理
  //ユーザー情報を登録するコレクションを設定
  const usersCollectionRef = collection(db, collectionName.USERS);
  const auth = getAuth();
  //required: trueにすることによってデータを取得する
  const handleSignUp = async (data: User) => {
    const {
      name,
      position,
      email,
      password,
      yearsExperience,
      favoritePhase,
      hobby,
    } = data;
    //認証に成功した場合auth情報をStoreにset
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      props.history.push("/");
      authDataContext.setIsAuthData(auth.currentUser);
    } catch (error) {
      alert("新規登録に失敗しました。");
      return;
    }
    try {
      const users = await getDocs(usersCollectionRef);
      //認証情報とFirestoreの情報をStoreのuidで紐付け
      await setDoc(doc(usersCollectionRef, auth.currentUser?.uid), {
        //現在のユーザー＋1をidとして登録する
        id: users.docs.length + 1,
        name: name,
        position: position,
        email: email,
        yearsExperience: yearsExperience,
        favoritePhase: favoritePhase,
        hobby: hobby,
      });
    } catch (error) {
      alert("ユーザー情報の登録に失敗しました。");
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
            プロフィール新規登録
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
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="YearsExperience"
                  label="経験年数"
                  autoComplete="yearsExperience"
                  {...register("yearsExperience", {
                    required: true,
                  })}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="FavoritePhase"
                  label="一番好きなフェーズ"
                  autoComplete="favoritePhase"
                  {...register("favoritePhase", {
                    required: true,
                  })}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  label="趣味"
                  multiline
                  rows={4}
                  id="hobby"
                  {...register("hobby", {
                    required: true,
                  })}
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
