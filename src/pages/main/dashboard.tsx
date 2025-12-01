import { FirstBox } from "@/components/main";
import { MainLayout } from "@/layouts";

export default function Dashboard() {
  return (
    <MainLayout>
      <div className="main space-y-6 pb-6">
        {/* Welcome Section */}
        <div className="space-y-1">
          <h1 className="text-2xl font-instrument font-bold">
            Welcome back, <span className="text-main">John</span>
          </h1>
          <p className="text-muted text-sm">
            Manage your virtual numbers securely
          </p>
        </div>

        {/* FirstBox Component */}
        <FirstBox />
      </div>
    </MainLayout>
  );
}