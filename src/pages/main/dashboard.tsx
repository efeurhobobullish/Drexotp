import { motion } from "framer-motion";
import { Phone, CreditCard, Plus, Activity, Shield } from "lucide-react";
import { Link } from "react-router-dom";

export default function Dashboard() {
  // Mock user data
  const userData = {
    balance: 125.50,
    totalNumbers: 8,
    activeNumbers: 6,
    numbersUsed: 247
  };

  const stats = [
    {
      icon: CreditCard,
      label: "Account Balance",
      value: `$${userData.balance}`,
      color: "green",
      description: "Available funds"
    },
    {
      icon: Phone,
      label: "Total Numbers",
      value: userData.totalNumbers,
      color: "blue",
      description: "Purchased numbers"
    },
    {
      icon: Activity,
      label: "Active Numbers",
      value: userData.activeNumbers,
      color: "amber",
      description: "Currently active"
    },
    {
      icon: Shield,
      label: "Numbers Used",
      value: userData.numbersUsed,
      color: "purple",
      description: "Total OTPs generated"
    }
  ];

  const recentPurchases = [
    { 
      id: 1, 
      number: "+1 (555) 123-4567", 
      price: 15.99, 
      date: "2024-01-15", 
      status: "active",
      usage: "12 OTPs"
    },
    { 
      id: 2, 
      number: "+1 (555) 987-6543", 
      price: 15.99, 
      date: "2024-01-10", 
      status: "active",
      usage: "8 OTPs"
    },
    { 
      id: 3, 
      number: "+1 (555) 456-7890", 
      price: 12.99, 
      date: "2024-01-05", 
      status: "expired",
      usage: "23 OTPs"
    },
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      green: "bg-green-500/20 text-green-500",
      blue: "bg-blue-500/20 text-blue-500",
      amber: "bg-amber-500/20 text-amber-500",
      purple: "bg-purple-500/20 text-purple-500"
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <h1 className="text-2xl font-bold font-space mb-2">
          Dashboard Overview
        </h1>
        <p className="text-muted">Manage your virtual numbers and monitor usage</p>
      </motion.section>

      {/* Stats Grid */}
      <motion.section
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.4 }}
      >
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={stat.label}
              className="bg-secondary dark:bg-foreground border border-line rounded-xl p-4"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 + index * 0.1 }}
            >
              <div className="flex items-center gap-3">
                <div className={`size-10 rounded-lg center ${getColorClasses(stat.color)}`}>
                  <Icon className="size-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-muted truncate">{stat.label}</p>
                  <p className="text-lg font-bold font-space truncate">{stat.value}</p>
                  <p className="text-xs text-muted mt-0.5">{stat.description}</p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </motion.section>

      {/* Quick Actions & Recent Purchases Side by Side */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Purchase Number Card */}
        <motion.section
          className="bg-gradient-to-br from-main to-main/80 rounded-xl p-6 text-white"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.4 }}
        >
          <div className="space-y-4">
            <div className="space-y-2">
              <h3 className="text-xl font-bold font-space">Get New Number</h3>
              <p className="text-white/80 text-sm">
                Purchase additional virtual numbers for your OTP verification needs
              </p>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center justify-between text-sm">
                <span className="text-white/70">Starting from</span>
                <span className="font-bold">$12.99</span>
              </div>
              
              <Link to="/numbers">
                <button className="btn bg-white text-main hover:bg-white/90 w-full py-3 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2">
                  <Plus className="size-5" />
                  Purchase Number
                </button>
              </Link>
            </div>
          </div>
        </motion.section>

        {/* Recent Purchases */}
        <motion.section
          className="bg-secondary dark:bg-foreground border border-line rounded-xl p-6"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.4 }}
        >
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-bold font-space">Recent Numbers</h3>
            <Link to="/numbers" className="text-main hover:text-main/80 text-sm font-medium">
              View All
            </Link>
          </div>

          <div className="space-y-3">
            {recentPurchases.map((purchase, index) => (
              <motion.div
                key={purchase.id}
                className="flex items-center justify-between p-3 rounded-lg border border-line/50 hover:border-line transition-colors bg-background/50"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div className={`size-8 rounded-lg center ${
                    purchase.status === 'active' ? 'bg-green-500/20' : 'bg-amber-500/20'
                  }`}>
                    <Phone className={`size-4 ${
                      purchase.status === 'active' ? 'text-green-500' : 'text-amber-500'
                    }`} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="font-medium text-sm truncate">{purchase.number}</p>
                    <p className="text-xs text-muted truncate">{purchase.usage}</p>
                  </div>
                </div>
                
                <div className="text-right">
                  <p className="text-sm font-bold font-space">${purchase.price}</p>
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

      {/* Security Status */}
      <motion.section
        className="bg-secondary dark:bg-foreground border border-line rounded-xl p-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.4 }}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="size-10 bg-green-500/20 rounded-lg center">
              <Shield className="size-5 text-green-500" />
            </div>
            <div>
              <h4 className="font-bold">System Secure</h4>
              <p className="text-sm text-muted">All numbers are AES-256 encrypted</p>
            </div>
          </div>
          <div className="flex items-center gap-2 text-sm text-green-500">
            <div className="relative flex size-2">
              <span className="absolute h-full w-full animate-ping rounded-full bg-green-500 opacity-75"></span>
              <span className="relative size-2 rounded-full bg-green-500"></span>
            </div>
            Live
          </div>
        </div>
      </motion.section>
    </div>
  );
}