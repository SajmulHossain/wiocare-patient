import { publicFetch } from "@/lib/custom-fetch";
import type { IResponse, IMedicine, QueryType } from "@/types";
import { getQueryString } from "@/lib/utils";

export const fetchMedicines = async (
  params: QueryType,
): Promise<IResponse<IMedicine[]>> => {
  const query = getQueryString(params);
  try {
    const res = await publicFetch.get(`/medicines?${query}`);
    const result: IResponse<IMedicine[]> = await res.json();
    if (!res.ok) {
      throw new Error(result.message || "Failed to fetch data");
    }
    return result;
  } catch (error) {
    console.error("Failed to fetch medicines:", error);
    return {
      success: false,
      message: error instanceof Error ? error.message : "Failed to fetch data",
      data: [],
    };
  }
};
