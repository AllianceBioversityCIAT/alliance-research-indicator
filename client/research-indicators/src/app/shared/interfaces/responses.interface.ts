export interface MainResponse<T> {
  data: T;
  status: number;
  description: string;
  timestamp: string;
  path: string;
  successfulRequest: boolean;
}

export interface ErrorResponse {
  error: boolean;
  detail: string;
}

export interface LoginRes {
  access_token: string;
  refresh_token: string;
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
