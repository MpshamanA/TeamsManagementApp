import * as React from "react";
import { useForm } from "react-hook-form";
import { RouteComponentProps } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { collection, setDoc, doc, getDocs } from "firebase/firestore";
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
import { Copyright } from "../components/Copyright";
import { Side } from "../components/Side";
import { Header } from "../components/Header";
import style from "../css/common.module.scss";

const theme = createTheme();

const EditProfile: React.FC<RouteComponentProps> = (props) => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<User>();

  const auth = getAuth();
  //プルフィールを編集する場合認証されてるユーザーのため
  const uid: any = auth.currentUser!.uid;
  //ユーザー情報を登録するコレクションを設定
  const usersCollectionRef = collection(db, "Users");
  //required: trueにすることによってデータを取得する
  const handleEditProfile = async (data: User) => {
    const { name, position, yearsExperience, careerPlan } = data;

    try {
      const users = await getDocs(usersCollectionRef);
      //認証情報とstore情報をuidで紐付け
      const cityRef = doc(usersCollectionRef, uid);
      await setDoc(
        cityRef,
        {
          name: name,
          position: position,
          yearsExperience: yearsExperience,
          careerPlan: careerPlan,
        },
        { merge: true }
      );
    } catch (error) {
      alert(error);
      return;
    }
  };
  return (
    <div className={style.grid}>
      <div className={style.side}>
        <Side />
      </div>
      <div className={style.header}>
        <Header history={props.history} />
      </div>
      <div className={style.mainItemList}>
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
                プロフィールの編集・追加
              </Typography>
              <Box
                component="form"
                noValidate
                sx={{ mt: 3 }}
                onSubmit={handleSubmit(handleEditProfile)}
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
                      value="test"
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
                      value="test"
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
                      id="yearsExperience"
                      label="経験年数"
                      autoComplete="yearsExperience"
                      {...register("yearsExperience", {
                        required: true,
                      })}
                    />
                  </Grid>
                  {/* <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      label="経験してきた言語/DB/OS/ツール"
                      id="favoriteProcess"
                      {...register("favoriteProcess", {
                        required: true,
                      })}
                    />
                  </Grid> */}
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      label="キャリアプラン"
                      id="favoriteProcess"
                      {...register("careerPlan", {
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
      </div>
    </div>
  );
};

export default EditProfile;
