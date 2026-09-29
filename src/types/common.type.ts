export interface IPageProps<T> {
  params: Promise<T>;
  searchParams: Promise<QueryType>;
}

// biome-ignore lint/suspicious/noExplicitAny: <It's not very big deal>
export type QueryType = Record<string, any>;
