import type { JwtPayload } from "jsonwebtoken";

export interface ServerToClientEvents {
  noArg: () => void;
  basicEmit: (a: number, b: string, c: Buffer) => void;
  withAck: (d: string, callback: (e: number) => void) => void;
  notification: (data: { title: string; message?: string }) => void;
  new_order_received: (data: {
    message: string;
    orderNumber: string;
    amount: number;
  }) => void;
}

export interface ClientToServerEvents {
  hello: () => void;
  joinRoom: (roomName: string) => void;
}

export interface InterServerEvents {
  ping: () => void;
}

export interface SocketData {
  user: JwtPayload;
}
