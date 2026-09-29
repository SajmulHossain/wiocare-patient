import { publicFetch } from "@/lib/custom-fetch";
import type { IResponse, IDoctor, QueryType, IUser } from "@/types";
import { getQueryString } from "@/lib/utils";

type SingleDoctorResponse = Pick<
  IUser,
  "name" | "username" | "gender" | "photo" | "role"
> & {
  doctor: Omit<IDoctor, "user">;
};

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

export const fetchDoctorByUsername = async (
  username: string,
): Promise<IResponse<IDoctor | null>> => {
  try {
    const res = await publicFetch.get(`/doctors/${username}`);
    const result: IResponse<SingleDoctorResponse> = await res.json();
    if (!res.ok || !result.success) {
      throw new Error(result.message || "Failed to fetch data");
    }

    let doctorData: IDoctor | null = null;

    if (result.data?.doctor) {
      doctorData = {
        ...result.data.doctor,
        user: {
          name: result.data.name,
          username: result.data.username,
          gender: result.data.gender,
          photo: result.data.photo,
          role: result.data.role,
        } as IUser,
      } as IDoctor;
    }

    return {
      success: result.success,
      message: result.message,
      data: doctorData,
      meta: result.meta,
    };
  } catch (error) {
    console.error(`Failed to fetch doctor ${username}:`, error);
    return {
      success: false,
      message: error instanceof Error ? error.message : "Failed to fetch data",
      data: null,
    };
  }
};
