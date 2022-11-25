export type UserInfo = {
  login: string;
  password: string;
}

export interface UserState {
  loading: boolean;
  userInfo: UserInfo | null;
  accessToken: null | string;
  error: unknown;
  success: boolean;
  isAuthenticated: boolean;
}

export type UserRegType = {
  login: string;
  password: string;
}