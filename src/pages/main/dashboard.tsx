import { motion } from "framer-motion";
import { Shield, Zap, Clock, Copy, RefreshCw, LogOut, User, Settings } from "lucide-react";
import { Link } from "react-router-dom";
import ModeToggle from "@/components/ui/mode-toggle";
import { Pattern } from "@/components/ui";

export default function Dashboard() {
  // Mock OTP data
  const otpData = {
    currentOTP: "429817",
    expiresIn: 28,
    lastUsed: "2 minutes ago",
    totalGenerated: 1_247
  };

  const recentActivity = [
    { id: 1, otp: "529734", service: "Google", time: "2 min ago", status: "used" },
    { id: 2, otp: "819203", service: "GitHub", time: "15 min ago", status: "used" },
    { id: 3, otp: "374912", service: "Stripe", time: "1 hour ago", status: "expired" },
  ];

  return (
    <Pattern>
      <div className="min-h-[100dvh] relative z-10 layout px-4 py-6">
        
        {/* Header */}
        <motion.header
          className="flex justify-between items-center mb-8"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex items-center gap-3">
            <div className="size-10 bg-gradient-to-r from-main to-main/70 rounded-full center text-white font-bold">
              DT
            </div>
            <div>
              <h1 className="font-space font-bold text-xl">DrexOTP</h1>
              <p className="text-xs text-muted">Secure OTP Dashboard</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <ModeToggle />
            <button className="p-2 rounded-full border border-line hover:border-main text-muted hover:text-main transition-colors">
              <Settings className="size-4" />
            </button>
            <button className="p-2 rounded-full border border-line hover:border-main text-muted hover:text-main transition-colors">
              <LogOut className="size-4" />
            </button>
          </div>
        </motion.header>

        {/* Welcome Section */}
        <motion.section
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
        >
          <h2 className="text-2xl font-bold font-space mb-2">
            Welcome back, <span className="text-main">User</span> 👋
          </h2>
          <p className="text-muted">Your OTP generator is running securely</p>
        </motion.section>

        {/* Current OTP Card */}
        <motion.section
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <div className="bg-secondary dark:bg-foreground border border-line rounded-2xl p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-space font-bold text-lg flex items-center gap-2">
                <Zap className="size-5 text-amber-500" />
                Current OTP
              </h3>
              <div className="flex items-center gap-2 text-sm text-muted">
                <Clock className="size-4" />
                <span>Expires in {otpData.expiresIn}s</span>
              </div>
            </div>
            
            <div className="text-center space-y-4">
              <div className="text-5xl md:text-6xl font-bold font-space tracking-wider text-main">
                {otpData.currentOTP}
              </div>
              
              <div className="flex justify-center gap-3">
                <button className="btn btn-primary px-6 py-3 rounded-full font-semibold flex items-center gap-2">
                  <Copy className="size-4" />
                  Copy OTP
                </button>
                <button className="btn border border-line hover:border-main text-muted hover:text-main px-6 py-3 rounded-full font-semibold flex items-center gap-2">
                  <RefreshCw className="size-4" />
                  Refresh
                </button>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Stats Grid */}
        <motion.section
          className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <div className="bg-secondary dark:bg-foreground border border-line rounded-xl p-4">
            <div className="flex items-center gap-3">
              <div className="size-10 bg-green-500/20 rounded-full center">
                <Shield className="size-5 text-green-500" />
              </div>
              <div>
                <p className="text-sm text-muted">Security Status</p>
                <p className="font-bold text-lg">Active</p>
              </div>
            </div>
          </div>

          <div className="bg-secondary dark:bg-foreground border border-line rounded-xl p-4">
            <div className="flex items-center gap-3">
              <div className="size-10 bg-blue-500/20 rounded-full center">
                <Zap className="size-5 text-blue-500" />
              </div>
              <div>
                <p className="text-sm text-muted">Total Generated</p>
                <p className="font-bold text-lg">{otpData.totalGenerated.toLocaleString()}</p>
              </div>
            </div>
          </div>

          <div className="bg-secondary dark:bg-foreground border border-line rounded-xl p-4">
            <div className="flex items-center gap-3">
              <div className="size-10 bg-amber-500/20 rounded-full center">
                <Clock className="size-5 text-amber-500" />
              </div>
              <div>
                <p className="text-sm text-muted">Last Used</p>
                <p className="font-bold text-lg">{otpData.lastUsed}</p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Recent Activity */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <div className="bg-secondary dark:bg-foreground border border-line rounded-2xl p-6">
            <h3 className="font-space font-bold text-lg mb-4">Recent Activity</h3>
            
            <div className="space-y-3">
              {recentActivity.map((activity, index) => (
                <motion.div
                  key={activity.id}
                  className="flex items-center justify-between p-3 rounded-lg border border-line/50 hover:border-line transition-colors"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                >
                  <div className="flex items-center gap-3">
                    <div className={`size-8 rounded-full center ${
                      activity.status === 'used' ? 'bg-green-500/20' : 'bg-amber-500/20'
                    }`}>
                      <Shield className={`size-4 ${
                        activity.status === 'used' ? 'text-green-500' : 'text-amber-500'
                      }`} />
                    </div>
                    <div>
                      <p className="font-medium">OTP ••• {activity.otp.slice(-3)}</p>
                      <p className="text-xs text-muted">{activity.service} • {activity.time}</p>
                    </div>
                  </div>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    activity.status === 'used' 
                      ? 'bg-green-500/20 text-green-500' 
                      : 'bg-amber-500/20 text-amber-500'
                  }`}>
                    {activity.status}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Quick Actions Footer */}
        <motion.footer
          className="mt-8 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.4 }}
        >
          <p className="text-xs text-muted">
            Secured with AES-256 encryption • Drex Technologies
          </p>
        </motion.footer>
      </div>
    </Pattern>
  );
}