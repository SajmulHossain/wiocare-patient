import { ProfileHeader } from "./profile-header";
import { ProfileDetails } from "./profile-details";
import { type IUser, Gender } from "@/types";

// Mock user data fetch to simulate server-side data loading
const getMockUser = async (): Promise<IUser> => {
  // Simulate network delay for the Suspense boundary
  await new Promise((resolve) => setTimeout(resolve, 600));

  return {
    wioId: "WIO-8472-X9",
    username: "alexjohnson",
    name: "Alex Johnson",
    photo: "/avatars/shadcn.jpg", // Using the existing avatar from the mock
    email: "alex.j@example.com",
    phoneNumber: "+1 (555) 123-4567",
    dob: "August 14, 1992",
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
