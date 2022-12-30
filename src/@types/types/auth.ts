export type RegisterUserType = {
  email: string;
  password: string;
  password_confirmation: string;
  purchase_code: string;
};

export type SingInUserType = {
  email: string;
  password: string;
  token_name: string | null;
};

export type RegisterUserPayload = {
  datas: RegisterUserType;
  callback: () => void;
};

export type SignInUserPayload = {
  datas: SingInUserType;
  callback: () => void;
};

export type UserInfoType = {
  mail: string;
  name: string;
};
