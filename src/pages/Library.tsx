import React, { useContext } from "react";
import { RouteComponentProps } from "react-router-dom";

import { Header } from "../components/Header";
import { Side } from "../components/Side";
import { manuContext } from "../Store";

import style from "../css/common.module.scss";

const Library: React.FC<RouteComponentProps> = (props) => {
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
          図書コンテンツ ◆図書購入_貸出制度◆
          -----------------------------------------------------------------------------
          ■対象者 ・全社員対象 ■毎月の上限金額 ・毎月一人5千円まで
          ※当社在籍中であれば何回でも購入可 ■購入申請できる本
          ・技術本、自己啓発などスキルアップに伴うものであれば何でもOK。
          ■購入方法 ・添付のフォーマットから申請をお願い致します。
          ※DMで岩本まで送付お願いします ■購入後のフロー
          ・購入後に貸し出しという形になるので、
          直接ご自宅へ配送又は別途お会いした時にお渡し致します。
          ・読み終わったあとは、上記同様にお会いした際や郵送で返却をお願いします。
          (本の保有元は会社となりますのでご注意下さい) ■現在貸出可能な書籍
          ・一覧表を作成しました。 ご希望の方購入申請書別タブの
          書籍貸出申請書から申請をお願いします。
        </div>
      </div>
    </>
  );
};

export default Library;
