import type { DoctorDocumentType } from "./enum";
import type { DocumentVerificationStatus } from "./enum";
import type { IDoctor } from "./doctor.type";
import type { IUser } from "./user.type";

export interface IDoctorDocument {
  id: string;
  documentType: DoctorDocumentType;
  documentNumber: string | null;
  title: string | null;
  fileUrl: string;
  backFileUrl: string | null;
  issueDate: string | null;
  expiryDate: string | null;
  verificationStatus: DocumentVerificationStatus;
  verificationNotes: string | null;
  statusUpdatedAt: string | null;
  verifiedByUserId: string | null;
  doctorId: string;
  doctor: IDoctor;
  verifiedByUser: IUser | null;
  isVerified: boolean;
  isActive: boolean;
  isDeleted: boolean;
  deletedAt: string | null;
  createdAt: string;
  updatedAt: string;
}
