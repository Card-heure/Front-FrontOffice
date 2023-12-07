import {APIRequest} from "./API.ts";


export default interface TUser extends APIRequest {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  profile_pic: string;
  created_at: Date;
}
export interface NewUser {
  first_name: string;
  last_name: string;
  profile_pic: string
  email: string;
  password: string;
}

export interface GetUser {
  email: string;
  password: string;
}