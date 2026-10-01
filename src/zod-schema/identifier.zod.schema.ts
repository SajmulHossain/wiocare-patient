import z from "zod";
import { phoneZodSchema } from "./phone.zod.schema";

export const identifierZodSchema = z.union(
  [z.email({ error: "Invalid email address" }), phoneZodSchema],
  {
    error: "Invalid credentials",
  },
);
