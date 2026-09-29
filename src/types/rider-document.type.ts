import type { DocumentVerificationStatus } from "./enum";
import type { IRider } from "./rider.type";
import type { RiderDocumentType } from "./enum";

export interface IRiderDocument {
  id: string;
  riderId: string;
  documentType: RiderDocumentType;
  documentNumber: string | null;
  fileUrl: string;
  backFileUrl: string | null;
  verificationStatus: DocumentVerificationStatus;
  verificationNotes: string | null;
  rider: IRider;
  createdAt: string;
  updatedAt: string;
}
