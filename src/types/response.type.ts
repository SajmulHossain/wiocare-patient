export interface IMeta {
  page: number;
  limit: number;
  total: number;
}

export interface IResponse<T> {
  success: boolean;
  message: string;
  data: T;
  meta?: IMeta;
}
