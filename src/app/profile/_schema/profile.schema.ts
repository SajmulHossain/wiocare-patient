import { Gender } from "@/types";
import z from "zod";

export const phoneZodSchema = z
  .string({ error: "Contact phone is required" })
  .trim()
  .regex(/^(?:\+88|88)?(01[3-9]\d{8})$/, {
    error: "Invalid Bangladeshi phone number format",
  });

export const profileSchema = z.object({
  email: z.email("Please enter a valid email address.").optional(),
  phoneNumber: phoneZodSchema.optional(),
  dob: z.string().optional(),
  gender: z
    .enum(Gender, {
      error: (e) => `Invalid Gender. Give either ${e.values.join(" or ")}`,
    })
    .optional(),
});

export type ProfileFormValues = z.infer<typeof profileSchema>;
