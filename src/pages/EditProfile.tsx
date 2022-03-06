import React, { useContext, useEffect, useState } from "react";

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

import { collectionName } from "../config/collections";
import { Copyright } from "../components/Copyright";
import { Header } from "../components/Header";
import { Side } from "../components/Side";
import { User } from "../Type";
import { manuContext, authContext, AuthDataStoreContext } from "../Store";

import { collection, setDoc, doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";
import { onAuthStateChanged, Auth, getAuth } from "firebase/auth";

const theme = createTheme();

const EditProfile: React.FC<RouteComponentProps> = (props) => {
  const state = useContext(manuContext);

  const { handleSubmit, register } = useForm<User>();

  //ユーザー情報を登録するコレクションを設定
  const usersCollectionRef = collection(db, collectionName.USERS);

  //編集する項目
  const [yearsExperience, setYearsExperience] = useState<string>("");
  const [favoritePhase, setFavoritePhase] = useState<string>("");
  const [hobby, setHobby] = useState<string>("");

  //プルフィールを編集する場合認証されてるユーザーのためNULLを否定
  const auth: Auth = getAuth();
  // const uid: string = auth.currentUser!.uid;
  const authData = useContext(authContext);

  //uidはStoreで管理するように修正が必要↓
  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      authData.setIsAuthData(currentUser);
      const getUserName = async () => {
        const docRef = doc(usersCollectionRef, authData.authData?.uid);
        const docSnap = await getDoc(docRef);
        //データが存在しない場合、スナップショットから返されるのは、exists() を呼び出した場合は false
        if (docSnap.exists()) {
          setYearsExperience(docSnap.data().yearsExperience);
          setFavoritePhase(docSnap.data().favoritePhase);
          setHobby(docSnap.data().hobby);
        }
        getUserName();
      };
    });
  }, []);

  //required: trueにすることによってデータを取得する
  const handleEditProfile = async (data: User) => {
    const { yearsExperience, favoritePhase, hobby } = data;

    try {
      //認証情報とstore情報をuidで紐付け
      const cityRef = doc(usersCollectionRef, authData.authData?.uid);
      await setDoc(
        cityRef,
        {
          yearsExperience: yearsExperience,
          favoritePhase: favoritePhase,
          hobby: hobby,
        },
        { merge: true }
      );
    } catch (error) {
      alert(error);
      return;
    }
    props.history.push(`/teams/${authData.authData?.uid}`);
  };
  return (
    <div className={!state.sideToggle ? style.grid : style.gridSideMin}>
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
                    {yearsExperience === "" ? (
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
                    ) : (
                      <TextField
                        required
                        fullWidth
                        id="yearsExperience"
                        label="経験年数"
                        defaultValue={yearsExperience}
                        autoComplete="yearsExperience"
                        {...register("yearsExperience", {
                          required: true,
                        })}
                      />
                    )}
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      label="得意なフェーズ"
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
