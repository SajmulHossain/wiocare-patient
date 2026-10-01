import { Suspense } from "react";
import { EmailVerifySection } from "./_section/email-verify";
import type { IPageProps } from "@/types";

const EmailVerifyPage = ({ searchParams }: IPageProps<null>) => {
  return (
    <section className="min-h-screen bg-muted/30">
      <div className="section">
        <Suspense fallback={<div>Loading...</div>}>
          <EmailVerifyContent searchParams={searchParams} />
        </Suspense>
      </div>
    </section>
  );
};

const EmailVerifyContent = async ({
  searchParams,
}: {
  searchParams: IPageProps<null>["searchParams"];
}) => {
  const { email } = await searchParams;

  return <EmailVerifySection email={email} />;
};

export default EmailVerifyPage;
