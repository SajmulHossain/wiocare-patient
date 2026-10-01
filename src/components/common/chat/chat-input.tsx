"use client";

import { useState, useRef, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  RiSendPlaneFill,
  RiAttachment2,
  RiCloseLine,
  RiFileTextFill,
} from "@remixicon/react";
import { cn } from "@/lib";
import Image from "next/image";

interface ChatInputProps {
  onSendMessage: (message: string, files: File[]) => void;
  placeholder?: string;
  className?: string;
}

interface FilePreview {
  file: File;
  url: string;
}

export function ChatInput({
  onSendMessage,
  placeholder = "Type your message...",
  className,
}: ChatInputProps) {
  const [message, setMessage] = useState("");
  const [files, setFiles] = useState<FilePreview[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Cleanup object URLs on unmount
  useEffect(() => {
    return () => {
      files.forEach((f) => {
        URL.revokeObjectURL(f.url);
      });
    };
  }, [files]);

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (message.trim() || files.length > 0) {
      onSendMessage(
        message.trim(),
        files.map((f) => f.file),
      );
      setMessage("");
      setFiles([]);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const selectedFiles = Array.from(e.target.files).map((file) => ({
        file,
        url: URL.createObjectURL(file),
      }));
      setFiles((prev) => [...prev, ...selectedFiles]);
    }
    // Reset input so the same file can be selected again if needed
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const removeFile = (urlToRemove: string) => {
    setFiles((prev) => {
      const newFiles = prev.filter((f) => f.url !== urlToRemove);
      URL.revokeObjectURL(urlToRemove);
      return newFiles;
    });
  };

  return (
    <div className={cn("flex flex-col bg-background border-t", className)}>
      {files.length > 0 && (
        <div className="flex gap-2 p-3 overflow-x-auto border-b">
          {files.map((preview) => (
            <div
              key={preview.url}
              className="relative flex items-center justify-center bg-muted/50 rounded-md h-16 w-16 shrink-0 border group overflow-hidden"
            >
              {preview.file.type.startsWith("image/") ? (
                <Image
                  src={preview.url}
                  alt={preview.file.name}
                  fill
                  className="object-cover"
                  unoptimized
                  sizes="64px"
                />
              ) : (
                <RiFileTextFill className="h-6 w-6 text-muted-foreground" />
              )}
              {!preview.file.type.startsWith("image/") && (
                <span className="absolute bottom-1 left-1 right-1 text-[8px] truncate text-center opacity-70">
                  {preview.file.name}
                </span>
              )}
              <button
                type="button"
                onClick={() => removeFile(preview.url)}
                className="absolute top-1 right-1 bg-background/80 hover:bg-background border rounded-full p-0.5 opacity-0 group-hover:opacity-100 transition-opacity z-10"
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
