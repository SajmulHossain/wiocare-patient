"use client";

import { useState } from "react";
import {
  ChatLayout,
  ChatMessageList,
  ChatInput,
} from "@/components/shared/chat";
import type { ChatMessageProps } from "@/components/shared/chat";

export const ChatSection = () => {
  const [messages, setMessages] = useState<ChatMessageProps[]>([
    {
      id: "1",
      text: "Hello! How can I help you today?",
      isSent: false,
      senderName: "WioCare Support",
      time: "10:00 AM",
    },
    {
      id: "2",
      text: "I need to schedule an appointment.",
      isSent: true,
      senderName: "Sajmul Hossain",
      time: "10:01 AM",
    },
  ]);

  const handleSendMessage = (text: string, files: File[]) => {
    const attachments = files.map((file) => ({
      type: file.type.startsWith("image/")
        ? ("image" as const)
        : ("pdf" as const),
      name: file.name,
      url: URL.createObjectURL(file),
    }));

    const userMessage: ChatMessageProps = {
      id: Date.now().toString(),
      text,
      isSent: true,
      senderName: "Sajmul Hossain",
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
      senderName: "WioCare Support",
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    setMessages((prev) => [...prev, userMessage, assistantMessage]);

    // Simulate streaming response
    const fullText =
      "Thank you for reaching out! This is a simulated streaming response. Notice how the MessageScroller automatically keeps the view anchored and scrolls smoothly as new text streams in, mimicking a real AI generation. If you manually scroll up while it's typing, the auto-scroll gracefully pauses so you don't lose your place.";

    let currentIndex = 0;
    const intervalId = setInterval(() => {
      currentIndex += 2; // Stream 2 characters at a time
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
    }, 20); // Fast streaming speed
  };

  return (
    <div className="mt-8 flex h-125 w-full max-w-3xl mx-auto">
      <ChatLayout>
        <ChatMessageList messages={messages} className="flex-1" />
        <ChatInput onSendMessage={handleSendMessage} />
      </ChatLayout>
    </div>
  );
};
