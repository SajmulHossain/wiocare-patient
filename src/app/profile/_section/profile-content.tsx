import { ProfileHeader } from "./profile-header";
import { ProfileDetails } from "./profile-details";
import { type IUser, Gender } from "@/types";
// Mock user data fetch to simulate server-side data loading
const getMockUser = async (): Promise<IUser> => {
  // Simulate network delay for the Suspense boundary
  await new Promise((resolve) => setTimeout(resolve, 600));

  return {
    wioId: "2026 0123645",
    username: "SajmulHossain",
    name: "Sajmul Hossain",
    photo: "/avatars/shadcn.jpg", // Using the existing avatar from the mock
    email: "sajmul@wiocare.com",
    phoneNumber: "+8801620414992",
    dob: "12/12/2002",
    gender: Gender.MALE,
  };
};

export const ProfileContent = async () => {
  const user = await getMockUser();

  return (
    <>
      <ProfileHeader user={user} />
      <ProfileDetails user={user} />
    </>
  );
};
