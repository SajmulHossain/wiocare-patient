import { publicFetch } from "@/lib/custom-fetch";
import type { IResponse, IDoctorDailyRoster } from "@/types";

export const fetchAvailableSchedules = async (
  username: string,
): Promise<IResponse<IDoctorDailyRoster[]>> => {
  try {
    const res = await publicFetch.get(`/schedules/available/${username}`);
    const result = await res.json();
    if (!res.ok || !result.success) {
      throw new Error(result.message || "Failed to fetch data");
    }
    return result;
  } catch (error) {
    console.error(`Failed to fetch schedules for doctor ${username}:`, error);
    return {
      success: false,
      message: error instanceof Error ? error.message : "Failed to fetch data",
      data: [],
    };
  }
};
