import type { IDoctor } from "./doctor.type";
import type { IWioDiscussion } from "./wio-discussion.type";

export interface IWioDiscussionComment {
  id: string;
  discussionId: string;
  doctorId: string;
  comment: string;
  specialty: string | null;
  discussion: IWioDiscussion;
  doctor: IDoctor;
  createdAt: string;
  updatedAt: string;
}
