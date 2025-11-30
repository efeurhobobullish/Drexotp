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
      description: "Available funds",
    },
    {
      icon: Phone,
      label: "Total Numbers",
      value: userData.totalNumbers,
      description: "Purchased numbers",
    },
  ];

  return (
    <MainLayout>
      <div className="main space-y-6 pb-4">
        {/* Welcome Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <h1 className="text-2xl font-bold font-space mb-1">
            Welcome back, <span className="text-main">John</span> 👋
          </h1>
          <p className="text-muted text-sm">
            Manage your virtual numbers and monitor usage
          </p>
        </motion.section>

        {/* Stats */}
        <motion.section
          className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.4 }}
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                className="bg-secondary border border-line rounded-xl p-4"
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 + index * 0.1 }}
              >
                <div className="flex items-center gap-3">
                  <div className="size-10 rounded-lg center bg-primary/10 text-primary">
                    <Icon size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-muted">{stat.label}</p>
                    <p className="text-lg font-bold font-space">{stat.value}</p>
                    <p className="text-xs text-muted">{stat.description}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.section>

        {/* Call to Action & Recent */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 pb-8">
          {/* Purchase Card */}
          <motion.section
            className="bg-main text-secondary rounded-xl p-5"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.4 }}
          >
            <h3 className="text-xl font-space flex items-center gap-2">
              Get New Number <ArrowUpRight className="size-5" />
            </h3>
            <p className="text-secondary/70 text-sm mt-1">
              Purchase additional numbers for OTP verification
            </p>

            <div className="flex items-center justify-between mt-3 text-sm">
              <span className="text-secondary/60">Starting from</span>
              <span className="font-bold">₦19,900</span>
            </div>

            <Link to="/numbers">
              <button className="btn bg-background text-main mt-4 w-full py-3 rounded-xl font-semibold hover:bg-background/90 transition flex items-center justify-center gap-2">
                <Plus size={18} /> Purchase Number
              </button>
            </Link>
          </motion.section>

          {/* Recent Placeholder */}
          <motion.section
            className="bg-secondary border border-line rounded-xl p-5"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.4 }}
          >
            <h3 className="font-space font-semibold mb-3">Recent Activity</h3>
            <p className="text-sm text-muted">No activities yet</p>
          </motion.section>
        </div>
      </div>
    </MainLayout>
  );
}