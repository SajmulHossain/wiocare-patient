import { publicFetch } from "@/lib/custom-fetch";

export const fetchDoctors = async (limit: number = 4) => {
  try {
    const res = await publicFetch.get(`/doctors?limit=${limit}`);
    const result = await res.json();
    if (!res.ok) {
      throw new Error(result.message || "Failed to fetch data");
    }
    console.log(result.data);
    return result.data;
  } catch (error) {
    console.error("Failed to fetch doctors:", error);
    return [];
  }
};
