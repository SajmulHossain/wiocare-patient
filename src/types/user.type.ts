export interface IUser {
  wioId: string;
  username: string;
  name: string;
  photo?: string;
  email?: string;
  phoneNumber?: string;
  dob?: string;
  gender?: Gender;
}

export enum Gender {
  MALE = "MALE",
  FEMALE = "FEMALE",
  OTHER = "OTHER",
}
