"use client";

import { useState } from "react";
import {
  ChatLayout,
  ChatMessageList,
  ChatInput,
} from "@/components/shared/chat";
import type { ChatMessageProps } from "@/components/shared/chat";

export function NewChatView() {
  const [messages, setMessages] = useState<ChatMessageProps[]>([
    {
      id: "1",
      text: "Hello! I am your WioCare AI Assistant. How can I help you today?",
      isSent: false,
      senderName: "WioCare Assistant",
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    },
  ]);

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
    <div className="flex flex-col flex-1 h-[calc(100vh-2rem)] w-full max-w-4xl mx-auto border rounded-2xl shadow-sm bg-background overflow-hidden">
      <ChatLayout className="flex-1 h-full">
        <ChatMessageList messages={messages} className="flex-1 h-full" />
        <ChatInput onSendMessage={handleSendMessage} />
      </ChatLayout>
    </div>
  );
}
