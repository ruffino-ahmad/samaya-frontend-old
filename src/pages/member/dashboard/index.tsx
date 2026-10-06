import DashboardLayout from "@/components/layouts/DashboardLayout";
import Dashboard from "@/features/member/components/Dashboard";

const DashboardMemberPage = () => {
  return (
    <DashboardLayout
      title="Dashboard"
      type="member"
      description="Welcome to the Member Dashboard"
    >
      <Dashboard />
    </DashboardLayout>
  );
};

export default DashboardMemberPage;
