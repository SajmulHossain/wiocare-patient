import { publicFetch } from "@/lib/custom-fetch";
import type { IResponse, IGlobalMedicalTest, QueryType } from "@/types";
import { getQueryString } from "@/lib/utils";

export const fetchMedicalTests = async (
  params: QueryType,
): Promise<IResponse<IGlobalMedicalTest[]>> => {
  const query = getQueryString(params);
  try {
    const res = await publicFetch.get(`/medical-tests?${query}`);
    const result: IResponse<IGlobalMedicalTest[]> = await res.json();
    if (!res.ok) {
      throw new Error(result.message || "Failed to fetch data");
    }
    return result;
  } catch (error) {
    console.error("Failed to fetch medical tests:", error);
    return {
      success: false,
      message: error instanceof Error ? error.message : "Failed to fetch data",
      data: [],
    };
  }
};

export const fetchMedicalTestBySlug = async (
  slug: string,
): Promise<IResponse<IGlobalMedicalTest | null>> => {
  try {
    const res = await publicFetch.get(`/medical-tests/${slug}`);
    const result: IResponse<IGlobalMedicalTest> = await res.json();
    if (!res.ok || !result.success) {
      throw new Error(result.message || "Failed to fetch data");
    }

    return {
      success: result.success,
      message: result.message,
      data: result.data,
      meta: result.meta,
    };
  } catch (error) {
    console.error(`Failed to fetch medical test ${slug}:`, error);
    return {
      success: false,
      message: error instanceof Error ? error.message : "Failed to fetch data",
      data: null,
    };
  }
};
