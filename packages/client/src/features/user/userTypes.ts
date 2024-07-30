import { IRegisterUser } from "@luck-test/contracts";

export interface UserState {
  loading: boolean;
  userInfo: IRegisterUser | null;
  error: unknown;
  success: boolean;
  isAuthenticated: boolean;
}

export type UserRegType = {
  login: string;
  password: string;
}