import envConfig from "@/config/env.config";
import { ClientToServerEvents, ServerToClientEvents } from "@/types";
import { io, Socket } from "socket.io-client";

export const socket: Socket<ServerToClientEvents, ClientToServerEvents> = io(
  envConfig.next_public_base_url,
  {
    withCredentials: true,
    autoConnect: false,
  },
);
