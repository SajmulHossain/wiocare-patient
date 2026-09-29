import type { IDoctor } from "./doctor.type";
import type { IWioDiscussionComment } from "./wio-discussion-comment.type";
import type { WioDiscussionStatus } from "./enum";

export interface IWioDiscussion {
  id: string;
  doctorId: string;
  title: string;
  caseSummary: string;
  specialties: string[];
  tags: string[];
  status: WioDiscussionStatus;
  aiSynthesis: unknown | null;
  failureReason: string | null;
  doctor: IDoctor;
  comments: IWioDiscussionComment[];
  createdAt: string;
  updatedAt: string;
}
