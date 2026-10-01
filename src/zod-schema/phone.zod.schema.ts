import z from "zod";

export const phoneZodSchema = z
  .string({ error: "Contact phone is required" })
  .trim()
  .regex(/^(?:\+88|88)?(01[3-9]\d{8})$/, {
    error: "Invalid Bangladeshi phone number format",
  });
