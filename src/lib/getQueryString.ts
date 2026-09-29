import type { QueryType } from "@/types";

export const getQueryString = (searchParams: QueryType) => {
  return new URLSearchParams(searchParams).toString();
};
