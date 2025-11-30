import { motion } from "framer-motion";
import { Shield, Zap, User, LogOut, Settings } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import ModeToggle from "@/components/ui";

interface MainLayoutProps {
  children: React.ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  const location = useLocation();

  const navigation = [
    { name: 'Dashboard', href: '/dashboard', icon: Zap },
    { name: 'Numbers', href: '/numbers', icon: Shield },
    { name: 'Profile', href: '/profile', icon: User },
  ];

  return (
    <div className="min-h-[100dvh] bg-background">
      {/* Sidebar */}
      <motion.nav 
        className="fixed left-0 top-0 h-full w-64 border-r border-line bg-background z-50"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex flex-col h-full p-6">
          {/* Logo */}
          <div className="flex items-center gap-3 mb-8">
            <div className="size-10 bg-gradient-to-r from-main to-main/70 rounded-full center text-white font-bold text-sm">
              DT
            </div>
            <div>
              <h1 className="font-space font-bold text-xl">DrexOTP</h1>
              <p className="text-xs text-muted">Secure Numbers</p>
            </div>
          </div>

          {/* Navigation */}
          <div className="space-y-2 flex-1">
            {navigation.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.href;
              
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`flex items-center gap-3 px-3 py-3 rounded-xl transition-all duration-200 ${
                    isActive
                      ? 'bg-main text-white shadow-lg'
                      : 'text-muted hover:text-main hover:bg-secondary'
                  }`}
                >
                  <Icon className="size-5" />
                  <span className="font-medium">{item.name}</span>
                </Link>
              );
            })}
          </div>

          {/* Bottom Actions */}
          <div className="space-y-3 pt-4 border-t border-line">
            <button className="flex items-center gap-3 px-3 py-3 rounded-xl text-muted hover:text-main hover:bg-secondary transition-all w-full">
              <Settings className="size-5" />
              <span className="font-medium">Settings</span>
            </button>
            <button className="flex items-center gap-3 px-3 py-3 rounded-xl text-muted hover:text-red-500 hover:bg-secondary transition-all w-full">
              <LogOut className="size-5" />
              <span className="font-medium">Logout</span>
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Main Content */}
      <main className="ml-64">
        {/* Top Header */}
        <motion.header 
          className="sticky top-0 z-40 border-b border-line bg-background/80 backdrop-blur"
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.3 }}
        >
          <div className="flex justify-between items-center h-16 px-8">
            <div>
              <h2 className="text-xl font-bold font-space">
                {navigation.find(item => item.href === location.pathname)?.name || 'Dashboard'}
              </h2>
            </div>
            
            <div className="flex items-center gap-4">
              <ModeToggle />
              
              {/* User Profile */}
              <div className="flex items-center gap-3">
                <div className="text-right">
                  <p className="text-sm font-medium">John Doe</p>
                  <p className="text-xs text-muted">Premium User</p>
                </div>
                <div className="size-10 bg-gradient-to-r from-main to-main/70 rounded-full center text-white font-bold text-sm">
                  JD
                </div>
              </div>
            </div>
          </div>
        </motion.header>

        {/* Page Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.4 }}
          className="p-8"
        >
          {children}
        </motion.div>
      </main>
    </div>
  );
}