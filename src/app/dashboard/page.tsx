import EmptyState from "@/components/common/empty-state";
import { RiNotification2Fill } from "@remixicon/react";

const DashboardPage = () => {
  return (
    <div>
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
  );
};

export default DashboardPage;
