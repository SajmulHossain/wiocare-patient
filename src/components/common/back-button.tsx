"use client";
import { ArrowLeftSquare } from "lucide-react";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

function BackButton({
  children,
  ...props
}: React.ComponentProps<typeof Button>) {
  const router = useRouter();
  return (
    <Button
      onClick={() => router.back()}
      className={"mb-4 " + props.className}
      {...props}
    >
      {children || (
        <>
          <ArrowLeftSquare className="me-1" /> Back
        </>
      )}
    </Button>
  );
}

export default BackButton;
