"use client";

import { useState, useRef } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  RiSendPlaneFill,
  RiAttachment2,
  RiCloseLine,
  RiImage2Fill,
  RiFileTextFill,
} from "@remixicon/react";
import { cn } from "@/lib/utils";

interface ChatInputProps {
  onSendMessage: (message: string, files: File[]) => void;
  placeholder?: string;
  className?: string;
}

export function ChatInput({
  onSendMessage,
  placeholder = "Type your message...",
  className,
}: ChatInputProps) {
  const [message, setMessage] = useState("");
  const [files, setFiles] = useState<File[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim() || files.length > 0) {
      onSendMessage(message.trim(), files);
      setMessage("");
      setFiles([]);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const selectedFiles = Array.from(e.target.files);
      setFiles((prev) => [...prev, ...selectedFiles]);
    }
  };

  const removeFile = (index: number) => {
    setFiles((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div className={cn("flex flex-col bg-background border-t", className)}>
      {files.length > 0 && (
        <div className="flex gap-2 p-3 overflow-x-auto border-b">
          {files.map((file) => (
            <div
              key={Date.now().toString()}
              className="relative flex items-center justify-center bg-muted/50 rounded-md h-16 w-16 shrink-0 border group"
            >
              {file.type.startsWith("image/") ? (
                <RiImage2Fill className="h-6 w-6 text-muted-foreground" />
              ) : (
                <RiFileTextFill className="h-6 w-6 text-muted-foreground" />
              )}
              <span className="absolute bottom-1 left-1 right-1 text-[8px] truncate text-center opacity-70">
                {file.name}
              </span>
              <button
                type="button"
                onClick={() => removeFile(Date.now().toString())}
                className="absolute -top-2 -right-2 bg-background border rounded-full p-0.5 opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <RiCloseLine className="h-3 w-3" />
              </button>
            </div>
          ))}
        </div>
      )}
      <form onSubmit={handleSubmit} className="flex items-center gap-2 p-3">
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          className="hidden"
          multiple
          accept="image/*,application/pdf"
        />
        <Button
          type="button"
          variant="ghost"
          size="icon"
          className="shrink-0 text-muted-foreground hover:text-foreground"
          onClick={() => fileInputRef.current?.click()}
        >
          <RiAttachment2 className="h-5 w-5" />
          <span className="sr-only">Attach files</span>
        </Button>
        <Input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder={placeholder}
          className="flex-1 rounded-full px-4 bg-muted/50 border-transparent focus-visible:ring-1 focus-visible:ring-primary/50"
        />
        <Button
          type="submit"
          size="icon"
          className="shrink-0 rounded-full h-10 w-10 transition-transform active:scale-95"
          disabled={!message.trim() && files.length === 0}
        >
          <RiSendPlaneFill className="h-5 w-5 -ml-0.5" />
          <span className="sr-only">Send message</span>
        </Button>
      </form>
    </div>
  );
}
