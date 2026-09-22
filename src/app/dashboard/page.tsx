import EmptyState from "@/components/common/empty-state";
import { RiNotification2Fill } from "@remixicon/react";
import { ChatSection } from "./_section/chat-section";
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
      <CustomQRCode data="ssdlafjsldafjkslafjasldkfjsldakjfsldafjksdalfjsdalfjas;ldfja;lsdfjasl;dfjskadfsladfjsldaafjalskdfjlkj" />
    </section>
  );
};

export default DashboardPage;
