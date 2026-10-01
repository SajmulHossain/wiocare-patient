import { Gender } from "@/types";
import { phoneZodSchema } from "@/zod-schema";
import z from "zod";

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
