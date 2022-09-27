import { UserInfo } from "./user-info";

export type UsersInfo = {
  users: UserInfo[];
  limit: number;
  total: number;
  skip: number;
};
