import { useForm } from "@tanstack/react-form";
import { z } from "zod";

export const profileSchema = z.object({
  email: z.string().optional(),
});
export type ProfileFormValues = z.infer<typeof profileSchema>;

const form = useForm({
  defaultValues: {
    email: "",
  } as ProfileFormValues,
  validators: {
    onBlur: profileSchema,
  }
});
