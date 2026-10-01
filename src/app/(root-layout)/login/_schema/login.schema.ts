import { phoneZodSchema } from "@/zod-schema";
import { z } from "zod";

export const loginSchema = z.object({
  identifier: z.union(
    [z.email({ error: "Invalid email address" }), phoneZodSchema],
    {
      error: "Invalid credentials",
    },
  ),
  password: z
    .string({ error: "Password must be string" })
    .min(6, { error: "Password must be atleast 6 characters long!" }),
});

export type LoginFormValues = z.infer<typeof loginSchema>;
