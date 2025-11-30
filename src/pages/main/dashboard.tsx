import { motion } from "framer-motion";
import { Phone, Zap, CreditCard, Plus } from "lucide-react";
import { Link } from "react-router-dom";

export default function Dashboard() {
  // Mock user data
  const userData = {
    balance: 125.50,
    totalNumbers: 8,
    activeNumbers: 6,
    numbersUsed: 247
  };

  const recentPurchases = [
    { id: 1, number: "+1 (555) 123-4567", price: 15.99, date: "2024-01-15", status: "active" },
    { id: 2, number: "+1 (555) 987-6543", price: 15.99, date: "2024-01-10", status: "active" },
    { id: 3, number: "+1 (555) 456-7890", price: 12.99, date: "2024-01-05", status: "expired" },
  ];

  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold font-space mb-2">
          Welcome back, <span className="text-main">John</span> 👋
        </h1>
        <p className="text-muted">Manage your virtual numbers and balance</p>
      </motion.section>

      {/* Stats Grid */}
      <motion.section
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.5 }}
      >
        {/* Balance Card */}
        <div className="bg-secondary dark:bg-foreground border border-line rounded-2xl p-6">
          <div className="flex items-center gap-4">
            <div className="size-12 bg-green-500/20 rounded-xl center">
              <CreditCard className="size-6 text-green-500" />
            </div>
            <div>
              <p className="text-sm text-muted">Account Balance</p>
              <p className="text-2xl font-bold font-space">${userData.balance}</p>
            </div>
          </div>
        </div>

        {/* Total Numbers */}
        <div className="bg-secondary dark:bg-foreground border border-line rounded-2xl p-6">
          <div className="flex items-center gap-4">
            <div className="size-12 bg-blue-500/20 rounded-xl center">
              <Phone className="size-6 text-blue-500" />
            </div>
            <div>
              <p className="text-sm text-muted">Total Numbers</p>
              <p className="text-2xl font-bold font-space">{userData.totalNumbers}</p>
            </div>
          </div>
        </div>

        {/* Active Numbers */}
        <div className="bg-secondary dark:bg-foreground border border-line rounded-2xl p-6">
          <div className="flex items-center gap-4">
            <div className="size-12 bg-amber-500/20 rounded-xl center">
              <Zap className="size-6 text-amber-500" />
            </div>
            <div>
              <p className="text-sm text-muted">Active Numbers</p>
              <p className="text-2xl font-bold font-space">{userData.activeNumbers}</p>
            </div>
          </div>
        </div>

        {/* Numbers Used */}
        <div className="bg-secondary dark:bg-foreground border border-line rounded-2xl p-6">
          <div className="flex items-center gap-4">
            <div className="size-12 bg-purple-500/20 rounded-xl center">
              <Zap className="size-6 text-purple-500" />
            </div>
            <div>
              <p className="text-sm text-muted">Total Used</p>
              <p className="text-2xl font-bold font-space">{userData.numbersUsed}</p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Purchase Number CTA */}
      <motion.section
        className="bg-gradient-to-r from-main to-main/70 rounded-2xl p-8 text-center text-white"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <div className="max-w-md mx-auto space-y-4">
          <h3 className="text-2xl font-bold font-space">Need more numbers?</h3>
          <p className="text-white/80">Purchase additional virtual numbers for your OTP needs</p>
          
          <Link to="/numbers">
            <button className="btn bg-white text-main hover:bg-white/90 mt-4 px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 flex items-center gap-2 mx-auto">
              <Plus className="size-5" />
              Purchase Number
            </button>
          </Link>
        </div>
      </motion.section>

      {/* Recent Purchases */}
      <motion.section
        className="bg-secondary dark:bg-foreground border border-line rounded-2xl p-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold font-space">Recent Purchases</h3>
          <Link to="/numbers" className="text-main hover:text-main/80 text-sm font-medium">
            View All
          </Link>
        </div>

        <div className="space-y-4">
          {recentPurchases.map((purchase, index) => (
            <motion.div
              key={purchase.id}
              className="flex items-center justify-between p-4 rounded-xl border border-line/50 hover:border-line transition-colors"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 + index * 0.1 }}
            >
              <div className="flex items-center gap-4">
                <div className={`size-10 rounded-xl center ${
                  purchase.status === 'active' ? 'bg-green-500/20' : 'bg-amber-500/20'
                }`}>
                  <Phone className={`size-5 ${
                    purchase.status === 'active' ? 'text-green-500' : 'text-amber-500'
                  }`} />
                </div>
                <div>
                  <p className="font-medium">{purchase.number}</p>
                  <p className="text-sm text-muted">Purchased on {purchase.date}</p>
                </div>
              </div>
              
              <div className="text-right">
                <p className="font-bold font-space">${purchase.price}</p>
                <span className={`text-xs px-2 py-1 rounded-full ${
                  purchase.status === 'active' 
                    ? 'bg-green-500/20 text-green-500' 
                    : 'bg-amber-500/20 text-amber-500'
                }`}>
                  {purchase.status}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  );
}