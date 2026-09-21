// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const catchRedirectError = (error: any) => {
  if (error?.digest?.startsWith("NEXT_REDIRECT")) {
    throw error;
  }
};
