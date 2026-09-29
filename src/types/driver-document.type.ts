import type { DocumentVerificationStatus } from "./enum";
import type { DriverDocumentType } from "./enum";
import type { IDriver } from "./driver.type";
import type { IUser } from "./user.type";

export interface IDriverDocument {
  id: string;
  documentType: DriverDocumentType;
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
  driverId: string;
  driver: IDriver;
  verifiedByUser: IUser | null;
  isDeleted: boolean;
  deletedAt: string | null;
  createdAt: string;
  updatedAt: string;
}
