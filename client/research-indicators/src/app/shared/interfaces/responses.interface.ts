export interface MainResponse<T> {
  data: T;
  successfulRequest: boolean;
  errorDetail?: string;
}

export interface ErrorResponse {
  error: boolean;
  detail: string;
}

export interface LoginRes {
  data: Data;
  status: number;
  description: string;
  timestamp: string;
  path: string;
}

export interface DecodedUserData {
  user_id?: number;
  first_name?: string;
  last_name?: string;
  iat?: number;
  exp?: number;
  letter?: string;
  isLogged: boolean;
}

interface Data {
  access_token: string;
  refresh_token: string;
}
