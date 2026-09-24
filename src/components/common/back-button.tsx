"use client";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import { RiFlightTakeoffLine } from "@remixicon/react";

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
          <RiFlightTakeoffLine className="me-1" /> Back
        </>
      )}
    </Button>
  );
}

export default BackButton;
