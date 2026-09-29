import { publicFetch } from "@/lib/custom-fetch";
import type { IResponse, IDoctor, QueryType } from "@/types";
import { getQueryString } from "@/lib/utils";

export const fetchDoctors = async (
  params: QueryType,
): Promise<IResponse<IDoctor[]>> => {
  const query = getQueryString(params);
  try {
    const res = await publicFetch.get(`/doctors?${query}`);
    const result: IResponse<IDoctor[]> = await res.json();
    if (!res.ok) {
      throw new Error(result.message || "Failed to fetch data");
    }
    return result;
  } catch (error) {
    console.error("Failed to fetch doctors:", error);
    return {
      success: false,
      message: error instanceof Error ? error.message : "Failed to fetch data",
      data: [],
    };
  }
};
