import type { AuditActorType } from "./enum";

export interface IAuditLog {
  id: string;
  actorType: AuditActorType;
  actorId: string | null;
  actorDisplayName: string | null;
  action: string;
  resourceType: string;
  resourceId: string;
  resourceDisplayName: string | null;
  parentType: string | null;
  parentId: string | null;
  changes: unknown | null;
  snapshot: unknown | null;
  metadata: unknown | null;
  requestId: string | null;
  correlationId: string | null;
  ipAddress: string | null;
  userAgent: string | null;
  createdAt: string;
}
