"use client";

import { useState } from "react";
import {
  ChatLayout,
  ChatMessageList,
  ChatInput,
} from "@/components/shared/chat";
import type { ChatMessageProps } from "@/components/shared/chat";
import Image from "next/image";
import wioChatLogo from "@/assets/icons/wio-chat.png";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";

export function NewChatView() {
  const [messages, setMessages] = useState<ChatMessageProps[]>([]);

  const handleSendMessage = (text: string, files: File[]) => {
    const attachments = files.map((file) => ({
      type: file.type.startsWith("image/") ? ("image" as const) : ("pdf" as const),
      name: file.name,
      url: URL.createObjectURL(file),
    }));

    const userMessage: ChatMessageProps = {
      id: Date.now().toString(),
      text,
      isSent: true,
      senderName: "You",
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
      attachments,
    };

    const assistantMessageId = `${Date.now().toString()}-ai`;
    const assistantMessage: ChatMessageProps = {
      id: assistantMessageId,
      text: "",
      isSent: false,
      senderName: "WioCare Assistant",
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    setMessages((prev) => [...prev, userMessage, assistantMessage]);

    // Simulate streaming response
    const fullText =
      "I'm an AI assistant. This is a simulated response demonstrating how the chat interface handles streaming text and auto-scrolling on a brand new chat page!";

    let currentIndex = 0;
    const intervalId = setInterval(() => {
      currentIndex += 2;
      if (currentIndex > fullText.length) {
        clearInterval(intervalId);
        currentIndex = fullText.length;
      }
      const currentText = fullText.slice(0, currentIndex);
      setMessages((prev) =>
        prev.map((msg) =>
          msg.id === assistantMessageId ? { ...msg, text: currentText } : msg,
        ),
      );
    }, 20);
  };

  return (
    <div className="flex flex-col flex-1 h-[calc(100vh-2rem)] w-full max-w-4xl mx-auto overflow-hidden">
      <ChatLayout className="flex-1 h-full bg-transparent border-0 relative">
        <motion.div
          layout
          className={cn(
            "flex w-full z-10",
            messages.length === 0
              ? "flex-1 flex-col items-center justify-center gap-4"
              : "flex-row items-center gap-3 px-4 pt-4 shrink-0"
          )}
        >
          <motion.div
            layout
            className={cn(
              "relative overflow-hidden shadow-sm bg-white p-2 shrink-0",
              messages.length === 0 ? "h-20 w-20 rounded-2xl" : "h-10 w-10 rounded-xl"
            )}
          >
            <Image
              src={wioChatLogo}
              alt="Wio Chat"
              fill
              className="object-contain"
            />
          </motion.div>
          
          <motion.div layout className="flex flex-col">
            <motion.h2
              layout
              className={cn(
                "font-semibold text-foreground",
                messages.length === 0 ? "text-2xl text-center" : "text-base"
              )}
            >
              Wio Support
            </motion.h2>
            <AnimatePresence>
              {messages.length === 0 && (
                <motion.p
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="text-muted-foreground mt-1 text-center"
                >
                  How can I help you today?
                </motion.p>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>

        {messages.length > 0 && (
          <ChatMessageList
            messages={messages}
            className="flex-1 h-full bg-transparent"
          />
        )}
        <div className="w-full shrink-0 pt-4">
          <ChatInput
            onSendMessage={handleSendMessage}
            className="border border-border/50 rounded-2xl shadow-sm bg-background/50 backdrop-blur-sm mb-4 mx-1"
          />
        </div>
      </ChatLayout>
    </div>
  );
}
