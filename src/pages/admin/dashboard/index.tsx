import DashboardLayout from "@/components/layouts/DashboardLayout";
import Dashboard from "@/features/admin/components/Dashboard";

const DashboardAdminPage = () => {
  return (
    <DashboardLayout
      title="Dashboard"
      type="admin"
      description="Welcome to the Admin Dashboard"
    >
      <Dashboard />
    </DashboardLayout>
  );
};

export default DashboardAdminPage;
