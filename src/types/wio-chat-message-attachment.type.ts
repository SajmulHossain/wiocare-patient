import type { AttachmentType } from "./enum";
import type { IMessage } from "./message.type";

export interface IWioChatMessageAttachment {
  id: string;
  messageId: string;
  url: string;
  fileType: AttachmentType;
  message: IMessage;
}
