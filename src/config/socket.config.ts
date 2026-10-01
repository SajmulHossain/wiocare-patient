import { envConfig } from "@/config";
import type { ClientToServerEvents, ServerToClientEvents } from "@/types";
import { io, type Socket } from "socket.io-client";

export const socket: Socket<ServerToClientEvents, ClientToServerEvents> = io(
  envConfig.next_public_base_url,
  {
    withCredentials: true,
    autoConnect: false,
  },
);
