export type ISearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

export type IParams = Promise<{ [key: string]: string | string[] | undefined }>;

export interface IPageProps {
  params: IParams;
  searchParams: ISearchParams;
}
