import React, { useState } from "react";

import { useForm } from "react-hook-form";

import { RouteComponentProps } from "react-router-dom";
import style from "../css/common.module.scss";

import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import PermIdentitySharpIcon from "@mui/icons-material/PermIdentitySharp";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

import { Copyright } from "../components/Copyright";
import { Header } from "../components/Header";
import { Side } from "../components/Side";
import { User } from "../Type";
import { sideManuContext } from "../App";

import { collection, setDoc, doc } from "firebase/firestore";
import { db } from "../firebase";
import { auth } from "../firebase";

const theme = createTheme();

const EditProfile: React.FC<RouteComponentProps> = (props) => {
  const [toggle, setToggle] = useState<boolean>(true);
  const hundleSidemanuChange = () => {
    setToggle(!toggle);
  };
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<User>();

  //プルフィールを編集する場合認証されてるユーザーのため
  const uid: any = auth.currentUser!.uid;
  //ユーザー情報を登録するコレクションを設定
  const usersCollectionRef = collection(db, "Users");

  //required: trueにすることによってデータを取得する
  const handleEditProfile = async (data: User) => {
    const { yearsExperience, favoritePhase, careerPlan } = data;

    try {
      //認証情報とstore情報をuidで紐付け
      const cityRef = doc(usersCollectionRef, uid);
      await setDoc(
        cityRef,
        {
          yearsExperience: yearsExperience,
          favoritePhase: favoritePhase,
          careerPlan: careerPlan,
        },
        { merge: true }
      );
    } catch (error) {
      alert(error);
      return;
    }
    props.history.push(`/teams/${uid}`);
  };
  return (
    <div className={style.grid}>
      <div className={style.side}>
        <sideManuContext.Provider value={{ toggle, setToggle }}>
          <Side />
        </sideManuContext.Provider>
      </div>
      <div className={style.header}>
        <Header
          history={props.history}
          hundleSidemanuChange={hundleSidemanuChange}
          isToggle={toggle}
        />
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
              <Avatar sx={{ m: 1, bgcolor: "secondary" }}>
                <PermIdentitySharpIcon />
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
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
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
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      label="1番好きなフェーズ(要件定義～基本設計など)"
                      id="favoritePhase"
                      {...register("favoritePhase", {
                        required: true,
                      })}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      label="キャリアプラン"
                      multiline
                      rows={4}
                      id="careerPlan"
                      {...register("careerPlan", {
                        required: true,
                      })}
                    />
                  </Grid>
                </Grid>
                <Button
                  type="submit"
                  variant="contained"
                  sx={{ mt: 3, mb: 2, alignItems: "center" }}
                >
                  編集完了
                </Button>
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
