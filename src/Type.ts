export type Store = {
  id: number;
  storeName: String;
  updateUser: String;
  updateTime: String;
  done: boolean;
};

export type User = {
  id: number;
  name: string;
  position: string;
  email: string;
  password: string;
  yearsExperience?: string;
  favoritePhase?: string;
  hobby?: string;
};

//一旦全部NULL許容
export type ProgrammingLanguages = {
  id?: number;
  uid?: string;
  programmingLanguage?: string;
};

export type Branch = {
  id: number;
  branch: string;
  zipcode: string;
  address: string;
  imgUrl?: string;
};

export type MailSendInfo = {
  name: string;
  bookName: string;
  rentalDate: Date;
  returnDate: Date;
};
