import React, { useContext, useEffect } from "react";
import { RouteComponentProps } from "react-router-dom";

import { useForm } from "react-hook-form";
import { useSendMail } from "../hooks/useSendMail";

import { explanations } from "../config/LibraryConfig/explanation";
import { Header } from "../components/Header";
import { Side } from "../components/Side";
import { manuContext } from "../Store";
import "../css/library.scss";

import { MailSendInfo } from "../Type";
import { SendMailOutput } from "../hooks/useSendMail";
import books from "../images/LibraryImg/books.jpg";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import style from "../css/common.module.scss";

const Library: React.FC<RouteComponentProps> = (props) => {
  const state = useContext(manuContext);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<MailSendInfo>();

  //メール送信後の結果を取得しアラートに出力
  const useGetResultCode = (data: MailSendInfo) => {
    const output: SendMailOutput = useSendMail(data);
    if (output.resultCode === 0) {
      alert("送信成功");
    } else {
      alert("送信失敗");
    }
  };
  return (
    <>
      <div className={!state.sideToggle ? style.grid : style.gridSideMin}>
        <div className={style.side}>
          <Side />
        </div>
        <div className={style.header}>
          <Header history={props.history} />
        </div>
        <div className={style.mainBenefits}>
          <div className={style.library}>
            <Box className="library-title">
              <img src={books} alt="" className="books-img" />
              <Typography
                gutterBottom
                variant="h2"
                component="div"
                sx={{
                  fontWeight: "bold",
                }}
                className={
                  state.sideToggle
                    ? "library-title-text-wide"
                    : "library-title-text"
                }
              >
                図書購入_貸出制度
              </Typography>
            </Box>
            {explanations.map((explanation) => (
              <Box key={explanation.title} sx={{ mt: 5 }}>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  sx={{
                    fontWeight: "bold",
                    borderBottom: 1,
                    display: "inline-block",
                  }}
                >
                  {explanation.title}
                </Typography>

                <Typography
                  gutterBottom
                  variant="body1"
                  component="div"
                  sx={{}}
                >
                  {explanation.explanation}
                </Typography>
              </Box>
            ))}
            <form onSubmit={handleSubmit(useGetResultCode)}>
              <Box className="send-mail-box-img">
                <Box className="send-mail-box" sx={{}}>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    className="send-mail-box-title"
                    sx={{}}
                  >
                    図書貸し出し申請
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      width: "20%",
                      p: 5,
                      alignItems: "center",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        width: "100%",
                        mb: 2,
                      }}
                    >
                      {errors.name && (
                        <p style={{ color: "red" }}>お名前を入力してください</p>
                      )}
                      <p>
                        お名前 <span>必須</span>
                      </p>
                      <input
                        placeholder="名前"
                        {...register("name", {
                          required: true,
                        })}
                      ></input>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        width: "100%",
                        mb: 2,
                      }}
                    >
                      {errors.bookName && (
                        <p style={{ color: "red" }}>書籍名を入力してください</p>
                      )}
                      <p>
                        購入して欲しい書籍名<span>必須</span>
                      </p>
                      <input
                        placeholder="購入して欲しい書籍名"
                        {...register("bookName", {
                          required: true,
                        })}
                      ></input>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        width: "100%",
                        mb: 2,
                      }}
                    >
                      {errors.rentalDate && (
                        <p style={{ color: "red" }}>
                          貸し出し希望日を入力してください
                        </p>
                      )}

                      <p>
                        貸し出し希望日 <span>必須</span>
                      </p>
                      <input
                        type="date"
                        placeholder="貸し出し希望日"
                        {...register("rentalDate", {
                          required: true,
                        })}
                      ></input>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        width: "100%",
                        mb: 2,
                      }}
                    >
                      {errors.returnDate && (
                        <p style={{ color: "red" }}>
                          返却希望日を入力してください
                        </p>
                      )}
                      <p>
                        返却希望日 <span>必須</span>
                      </p>
                      <input
                        placeholder="返却希望日"
                        type="date"
                        {...register("returnDate", {
                          required: true,
                        })}
                      ></input>
                    </Box>
                    <Button
                      variant="contained"
                      size="small"
                      type="submit"
                      sx={{ backgroundColor: "#eee", color: "#000" }}
                    >
                      送信
                    </Button>
                  </Box>
                </Box>
              </Box>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Library;
