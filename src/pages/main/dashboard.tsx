import { FirstBox } from "@/components/main";
import { MainLayout } from "@/layouts";
import { Link } from "react-router-dom";
import { Info, ArrowRightCircle, Activity } from "lucide-react";

export default function Dashboard() {
  return (
    <MainLayout>
      <div className="main space-y-8 mt-6 pb-6">

        {/* First Row */}
        <div className="grid lg:grid-cols-3 sm:grid-cols-1 md:gap-4 gap-6">
          {/* FirstBox already has balance & quick actions */}
          <FirstBox />

          {/* Right-side content */}
          <div className="lg:col-span-2 space-y-6">

            {/* Recent Activity */}
            <div className="border border-line rounded-xl bg-background dark:bg-secondary p-6">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-space font-semibold text-sm flex items-center gap-2">
                  <Activity size={16} /> Recent Activity
                </h3>
                <Link
                  to="/numbers"
                  className="text-xs text-muted hover:text-main flex items-center gap-1"
                >
                  View <ArrowRightCircle size={14} />
                </Link>
              </div>
              <p className="text-sm text-muted">No recent activities yet.</p>
            </div>

            {/* Status Info */}
            <div className="border border-line rounded-xl bg-background dark:bg-secondary p-6 flex items-start gap-3">
              <div className="center size-8 rounded-lg bg-primary/10 text-primary">
                <Info size={18} />
              </div>
              <div>
                <p className="text-sm font-medium">All systems are operating normally.</p>
                <p className="text-xs text-muted">No current service issues</p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </MainLayout>
  );
}