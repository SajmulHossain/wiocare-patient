"use client";

import {
  MessageScrollerProvider,
  MessageScroller,
  MessageScrollerViewport,
  MessageScrollerContent,
  MessageScrollerItem,
  MessageScrollerButton,
} from "@/components/ui/message-scroller";
import { ChatMessage, type ChatMessageProps } from "./chat-message";
import { cn } from "@/lib";

interface ChatMessageListProps {
  messages: ChatMessageProps[];
  className?: string;
}

export function ChatMessageList({ messages, className }: ChatMessageListProps) {
  return (
    <MessageScrollerProvider autoScroll defaultScrollPosition="last-anchor">
      <MessageScroller className={cn("bg-background", className)}>
        <MessageScrollerViewport className="px-4 py-4">
          <MessageScrollerContent>
            {messages.map((msg) => (
              <MessageScrollerItem
                key={msg.id}
                messageId={msg.id}
                scrollAnchor={msg.isSent}
              >
                <ChatMessage {...msg} />
              </MessageScrollerItem>
            ))}
          </MessageScrollerContent>
        </MessageScrollerViewport>
        <MessageScrollerButton direction="end" />
      </MessageScroller>
    </MessageScrollerProvider>
  );
}
