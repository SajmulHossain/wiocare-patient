import { z } from "zod";
import { identifierZodSchema } from "@/zod-schema";

export const registerSchema = z
  .object({
    name: z.string().min(2, "Full name must be at least 2 characters"),
    identifier: identifierZodSchema,
    password: z.string().min(6, "Password must be at least 6 characters"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

export type RegisterFormValues = z.infer<typeof registerSchema>;
