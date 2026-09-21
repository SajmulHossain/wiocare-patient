import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { getNameInitialCharacter } from "@/lib/getNameInitChar";
import Image from "next/image";
import { RiFileTextFill } from "@remixicon/react";

export interface ChatAttachment {
  type: "image" | "pdf";
  url: string;
  name: string;
}

export interface ChatMessageProps {
  id: string;
  text: string;
  isSent: boolean;
  senderName: string;
  time: string;
  avatarUrl?: string;
  className?: string;
  attachments?: ChatAttachment[];
}

export function ChatMessage({
  text,
  isSent,
  senderName,
  time,
  avatarUrl,
  className,
  attachments,
}: ChatMessageProps) {
  return (
    <div
      className={cn(
        "flex w-full gap-3",
        isSent ? "justify-end" : "justify-start",
        className,
      )}
    >
      {!isSent && (
        <Avatar className="h-8 w-8 shrink-0">
          <AvatarImage src={avatarUrl} alt={senderName} />
          <AvatarFallback>{getNameInitialCharacter(senderName)}</AvatarFallback>
        </Avatar>
      )}
      <div
        className={cn(
          "flex flex-col max-w-[75%]",
          isSent ? "items-end" : "items-start",
        )}
      >
        <span className="text-xs text-muted-foreground mb-1 px-1">
          {senderName}
        </span>
        <div
          className={cn(
            "px-4 py-2.5 rounded-2xl",
            isSent
              ? "bg-primary text-primary-foreground rounded-tr-sm"
              : "bg-muted text-foreground rounded-tl-sm",
          )}
        >
          {attachments && attachments.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-2">
              {attachments.map((file) => (
                <div
                  key={file.url}
                  className="relative rounded-md overflow-hidden bg-background/10 max-w-50"
                >
                  {file.type === "image" ? (
                    <Image
                      src={file.url}
                      alt={file.name}
                      width={200}
                      height={200}
                      unoptimized
                      className="w-full h-auto object-cover max-h-37.5 rounded-md"
                    />
                  ) : (
                    <div className="flex items-center gap-2 p-2 rounded-md border border-background/20 bg-background/20">
                      <RiFileTextFill className="h-6 w-6 shrink-0" />
                      <span
                        className="text-xs truncate max-w-30"
                        title={file.name}
                      >
                        {file.name}
                      </span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
          {text && <p className="text-sm leading-relaxed">{text}</p>}
        </div>
        <span className="text-[10px] text-muted-foreground mt-1 px-1">
          {time}
        </span>
      </div>
      {isSent && (
        <Avatar className="h-8 w-8 shrink-0">
          <AvatarImage src={avatarUrl} alt={senderName} />
          <AvatarFallback>{getNameInitialCharacter(senderName)}</AvatarFallback>
        </Avatar>
      )}
    </div>
  );
}
