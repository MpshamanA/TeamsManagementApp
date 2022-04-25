import { Branch } from "../Type";
import Fukuoka from "../images/Fukuoka.jpg";
import Nagoya from "../images/Nagoya.jpg";
import Osaka from "../images/Osaka.jpg";
import Tokyo from "../images/Tokyo.jpg";

export const branchs: Branch[] = [
  {
    id: 1,
    branch: "東京本社",
    zipcode: "〒170-0013",
    address: "東京都豊島区東池袋1-18-1 Hareza Tower20階",
    imgUrl: Tokyo,
  },
  {
    id: 2,
    branch: "名古屋支店",
    zipcode: "〒460-0008",
    address: "愛知県名古屋市中区栄3-15-27 いちご栄ビル9階",
    imgUrl: Nagoya,
  },
  {
    id: 3,
    branch: "大阪支店",
    zipcode: "〒550-0005",
    address: "大阪市西区西本町1-4-1 オリックス本町ビル4階",
    imgUrl: Osaka,
  },
  {
    id: 4,
    branch: "福岡支店",
    zipcode: "〒812-0011",
    address: "福岡県福岡市博多区博多駅前二丁目1番1号",
    imgUrl: Fukuoka,
  },
];
