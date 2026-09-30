"use client";

import { cn } from "cn";
import { Input } from "@/components/ui/input";
import { RiEyeLine, RiEyeCloseLine } from "@remixicon/react";
import { useState } from "react";

function PasswordInput({ className, ...props }: React.ComponentProps<"input">) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="relative">
      <Input
        type={showPassword ? "text" : "password"}
        className={cn("pr-9", className)}
        {...props}
      />
      <button
        type="button"
        onClick={() => setShowPassword((prev) => !prev)}
        className="absolute right-0 top-0 h-full px-3 flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        disabled={props.disabled}
        aria-label={showPassword ? "Hide password" : "Show password"}
      >
        {showPassword ? (
          <RiEyeLine className="h-4 w-4" />
        ) : (
          <RiEyeCloseLine className="h-4 w-4" />
        )}
      </button>
    </div>
  );
}

export { PasswordInput };
