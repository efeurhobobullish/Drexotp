import { motion } from "framer-motion";
import { Phone, CreditCard, Plus, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { MainLayout } from "@/layouts";

export default function Dashboard() {
  const userData = {
    balance: 125500,
    totalNumbers: 8,
  };

  const stats = [
    {
      icon: CreditCard,
      label: "Account Balance",
      value: `₦${userData.balance.toLocaleString()}`,
    },
    {
      icon: Phone,
      label: "Total Numbers",
      value: userData.totalNumbers,
    },
  ];

  return (
    <MainLayout>
      <div className="main space-y-8 pb-6">
        
        {/* Welcome */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="space-y-1"
        >
          <h1 className="text-2xl font-space font-bold">
            Welcome back, <span className="text-main">John</span>
          </h1>
          <p className="text-muted text-sm">
            Manage your virtual numbers securely
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.3 }}
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                className="rounded-xl border border-line bg-secondary dark:bg-foreground p-4 flex items-center gap-4"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.15 + index * 0.05 }}
              >
                <div className="size-10 center rounded-lg bg-primary/10 text-primary">
                  <Icon size={18} />
                </div>
                <div>
                  <p className="text-xs text-muted">{stat.label}</p>
                  <p className="text-lg font-space font-semibold">{stat.value}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Main actions & recent */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          
          {/* Purchase Number */}
          <motion.div
            className="rounded-xl bg-primary text-background p-5"
            initial={{ opacity: 0, x: -15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.3 }}
          >
            <div className="space-y-3">
              <h3 className="text-xl font-space font-bold flex items-center gap-2">
                Get New Number <ArrowUpRight size={18} />
              </h3>
              <p className="text-sm opacity-80">
                Purchase Nigerian virtual numbers for OTP verification
              </p>

              <Link to="/numbers">
                <button className="btn bg-background text-main mt-4 w-full py-3 rounded-xl hover:bg-background/90 transition font-semibold gap-2">
                  <Plus size={18} />
                  Purchase Number
                </button>
              </Link>
            </div>
          </motion.div>

          {/* Recent Activity */}
          <motion.div
            className="rounded-xl bg-secondary dark:bg-foreground border border-line p-5"
            initial={{ opacity: 0, x: 15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.25, duration: 0.3 }}
          >
            <div className="flex justify-between items-center mb-3">
              <h3 className="font-space font-semibold">Recent Activity</h3>
              <Link to="/numbers" className="text-main text-xs hover:underline">
                View All
              </Link>
            </div>

            <p className="text-sm text-muted">No activities yet</p>
          </motion.div>
        </div>
      </div>
    </MainLayout>
  );
}