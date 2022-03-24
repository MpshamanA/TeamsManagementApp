import React, { useContext } from "react";

import { RouteComponentProps } from "react-router-dom";

import { Header } from "../components/Header";
import { Side } from "../components/Side";
import { manuContext } from "../Store";

import Typography from "@mui/material/Typography";

import style from "../css/common.module.scss";

const SideBusiness: React.FC<RouteComponentProps> = (props) => {
  const state = useContext(manuContext);
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
          <Typography gutterBottom variant="h5" component="div" sx={{}}>
            ◆副業許可申請詳細◆
          </Typography>
          <Typography gutterBottom variant="h5" component="div" sx={{}}>
            対象者
          </Typography>
          <Typography gutterBottom variant="h5" component="div" sx={{}}>
            当社社員全員
          </Typography>
          <Typography gutterBottom variant="h5" component="div" sx={{}}>
            添付されている資料をダウンロードしていただき
            記載後に岩本までDMにて送付してください。
          </Typography>
          <Typography gutterBottom variant="h5" component="div" sx={{}}>
            提出期日
          </Typography>
          <Typography gutterBottom variant="h5" component="div" sx={{}}>
            副業が決まり次第随時
          </Typography>
          <Typography gutterBottom variant="h5" component="div" sx={{}}>
            注意事項
          </Typography>
          <Typography gutterBottom variant="h5" component="div" sx={{}}>
            副業される方は年末調整の関係も有るため、必ず申請をお願い致します
            副業される方は税務署へ開業届の提出をしましょう
            副業される方は必ず確定申告をしましょう
            確定申告や開業申請など不明点あればお問合せください
          </Typography>
        </div>
      </div>
    </>
  );
};

export default SideBusiness;
