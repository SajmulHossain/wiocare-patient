"use client";

import { ErrorSection } from "./_section/error-section";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return <ErrorSection error={error} reset={reset} />;
}
