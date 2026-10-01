import { z } from "zod";
import { identifierZodSchema } from "@/zod-schema";

export const loginSchema = z.object({
  identifier: identifierZodSchema,
  password: z
    .string({ error: "Password must be string" })
    .min(6, { error: "Password must be atleast 6 characters long!" }),
});

export type LoginFormValues = z.infer<typeof loginSchema>;
