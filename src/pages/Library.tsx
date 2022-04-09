import React, { useContext } from "react";
import { RouteComponentProps } from "react-router-dom";

import { useForm } from "react-hook-form";

import { explanations } from "../config/LibraryConfig/explanation";
import { Header } from "../components/Header";
import { Side } from "../components/Side";
import { manuContext } from "../Store";
import "../css/library.css";
import { MailSendInfo } from "../Type";

import books from "../images/LibraryImg/books.jpg";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import { init, send } from "@emailjs/browser";

import style from "../css/common.module.scss";

const Library: React.FC<RouteComponentProps> = (props) => {
  const state = useContext(manuContext);

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<MailSendInfo>();

  const sendMail = async (data: MailSendInfo) => {
    //formで入力された情報を取得
    const { name, bookName, rentalDate, returnDate } = data;
    //envファイルから認証情報を取得
    const userID = process.env.REACT_APP_EMAILJS_USER_ID;
    const serviceID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const templateID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    console.log(process.env.REACT_APP_EMAILJS_USER_ID);
    console.log(serviceID);
    console.log(templateID);
    console.log();

    if (userID && serviceID && templateID) {
      console.log("in if");
      // emailJS初期化
      init(userID);
      const params = {
        name: name,
        bookName: bookName,
        rentalDate: rentalDate,
        returnDate: returnDate,
      };
      console.log(params);

      try {
        await send(serviceID, templateID, params);
        alert("送信成功");
      } catch (error) {
        // 送信失敗したらalertで表示
        alert(`送信失敗：${error}`);
      }
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
            ---------------------------------- メール送信
            ----------------------------------
            <form onSubmit={handleSubmit(sendMail)}>
              <ul>
                <li>
                  <input
                    placeholder="名前"
                    {...register("name", {
                      required: true,
                    })}
                  ></input>
                </li>
                <li>
                  <input
                    placeholder="購入して欲しい書籍名"
                    {...register("bookName", {
                      required: true,
                    })}
                  ></input>
                </li>
                <li>
                  <input
                    type="date"
                    placeholder="貸し出し希望日"
                    {...register("rentalDate", {
                      required: true,
                    })}
                  ></input>
                </li>
                <li>
                  <input
                    placeholder="返却希望日"
                    type="date"
                    {...register("returnDate", {
                      required: true,
                    })}
                  ></input>
                </li>
                <li>
                  <button type="submit">送信</button>
                </li>
              </ul>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Library;
