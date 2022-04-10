import { MailSendInfo } from "../Type";

import { init, send } from "@emailjs/browser";

export type SendMailOutput = {
  resultCode: number;
};
/*
メールを送信し結果コードをretrun
*/
export const useSendMail = (data: MailSendInfo) => {
  const userID = process.env.REACT_APP_EMAILJS_USER_ID;
  const serviceID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
  const templateID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;

  const output: SendMailOutput = {
    resultCode: 0,
  };

  if (userID && serviceID && templateID) {
    // emailJS初期化
    init(userID);
    //emailJSのテンプレートで指定したパラメータをここで作成
    const params = {
      name: data.name,
      bookName: data.bookName,
      rentalDate: data.rentalDate,
      returnDate: data.returnDate,
    };
    const sendMail = async () => {
      try {
        //メール送信
        await send(serviceID, templateID, params);
      } catch (error) {
        // 送信失敗したらalertで表示
        output.resultCode = 1;
      }
    };
    sendMail();
  }
  return output;
};
