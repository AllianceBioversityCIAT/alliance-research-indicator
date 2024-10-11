export interface Payload<T> {
  data: T;
  timestamp?: number;
  id?: string;
}

export interface ConfigUserPayload {
  name: string;
  userId: number;
  platform: string;
}
