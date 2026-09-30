import EmptyState from "@/components/common/empty-state";
import { RiNotification2Fill } from "@remixicon/react";
import { ChatSection } from "./_section/chat-section";
import { WioVirtualCard } from "@/components/common/wio-virtual-card";
import { CustomQRCode } from "@/components/common/custom-qr-code";

const DashboardPage = () => {
  return (
    <section>
      <div className="flex justify-center">
        <EmptyState
          icon={RiNotification2Fill}
          title="Notifications"
          description="You are all caught up!"
          actionLabel="Refresh"
          actionHref="/dashboard"
          type="success"
          className="w-125"
        />
      </div>
      <ChatSection />
      <CustomQRCode
        data="www.wiocare.com, sajmul.com, sajmulhossain"
        height={200}
        width={200}
      />
      <div className="py-8">
        <WioVirtualCard
          wioId="2026 000048"
          name="Sajmul Hossain"
          bloodGroup="A+"
          address="Muradpur, Chattogram"
        />
      </div>
    </section>
  );
};

export default DashboardPage;
