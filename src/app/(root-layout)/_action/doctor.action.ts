import { publicFetch } from "@/lib/custom-fetch";
import type { IResponse, IDoctor } from "@/types";

export const fetchDoctors = async (
  limit: number = 4,
): Promise<IResponse<IDoctor[]>> => {
  try {
    const res = await publicFetch.get(`/doctors?limit=${limit}`);
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
