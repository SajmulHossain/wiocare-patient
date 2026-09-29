import type { DocumentVerificationStatus } from "./enum";
import type { IUser } from "./user.type";
import type { IVehicle } from "./vehicle.type";
import type { VehicleDocumentType } from "./enum";

export interface IVehicleDocument {
  id: string;
  documentType: VehicleDocumentType;
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
  vehicleId: string;
  vehicle: IVehicle;
  verifiedByUser: IUser | null;
  isDeleted: boolean;
  deletedAt: string | null;
  createdAt: string;
  updatedAt: string;
}
