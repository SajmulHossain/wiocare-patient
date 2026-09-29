import type { IConversation } from "./conversation.type";
import type { IWioChatMessageAttachment } from "./wio-chat-message-attachment.type";
import type { MessageStatus } from "./enum";
import type { SenderRole } from "./enum";

export interface IMessage {
  id: string;
  conversationId: string;
  role: SenderRole;
  content: string | null;
  status: MessageStatus;
  error: string | null;
  modelUsed: string | null;
  promptTokens: number | null;
  completionTokens: number | null;
  attachments: IWioChatMessageAttachment[];
  createdAt: string;
  conversation: IConversation;
}
