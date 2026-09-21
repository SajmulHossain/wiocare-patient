"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { socket } from "@/config/socket.config";
import { toast } from "sonner";

interface SocketContextType {
  isConnected: boolean;
}

const SocketContext = createContext<SocketContextType>({ isConnected: false });

export const SocketProvider = ({ children }: { children: React.ReactNode }) => {
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    socket.connect();

    const onConnect = () => setIsConnected(true);
    const onDisconnect = () => setIsConnected(false);

    socket.on("connect", onConnect);
    socket.on("disconnect", onDisconnect);

    const onNotification = (data: { title: string; message?: string }) => {
      toast.message(data.title, {
        description: data.message,
      });
    };

    socket.on("notification", onNotification);

    return () => {
      socket.off("connect", onConnect);
      socket.off("disconnect", onDisconnect);
      socket.off("notification", onNotification);
      socket.disconnect();
    };
  }, []);

  return (
    <SocketContext.Provider value={{ isConnected }}>
      {children}
    </SocketContext.Provider>
  );
};

export const useSocket = () => useContext(SocketContext);
