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
};
