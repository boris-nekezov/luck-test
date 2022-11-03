export interface IRegisterUser {
  login: string;
  password: string;
}

export interface ILoginResponse {
  accessToken: string;
}

export interface IUserInfo {
  userId: string;
  login: string;
}
