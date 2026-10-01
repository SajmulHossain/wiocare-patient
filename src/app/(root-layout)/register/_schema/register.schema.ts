import { z } from "zod";
import { phoneZodSchema } from "@/app/profile/_schema/profile.schema";

export const registerSchema = z
  .object({
    name: z.string().min(2, "Full name must be at least 2 characters"),
    identifier: z.union(
      [z.email({ error: "Invalid email address" }), phoneZodSchema],
      {
        error: "Invalid email or phone number",
      },
    ),
    password: z.string().min(6, "Password must be at least 6 characters"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

export type RegisterFormValues = z.infer<typeof registerSchema>;
