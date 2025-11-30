import { motion } from "framer-motion";
import { Home, Phone, User, Shield, Settings, LogOut } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ModeToggle } from "@/components/ui";

interface MainLayoutProps {
  children: React.ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  const location = useLocation();
  const navigate = useNavigate();

  const navigation = [
    { name: 'Dashboard', href: '/dashboard', icon: Home },
    { name: 'Numbers', href: '/numbers', icon: Phone },
    { name: 'Profile', href: '/profile', icon: User },
  ];

  const handleLogout = () => {
    // Add logout logic here
    navigate('/');
  };

  return (
    <div className="min-h-[100dvh] bg-background pb-20"> {/* Padding for bottom nav */}
      {/* Header */}
      <motion.header 
        className="sticky top-0 z-50 border-b border-line bg-background/80 backdrop-blur"
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex justify-between items-center h-16 px-4">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="size-10 bg-gradient-to-r from-main to-main/70 rounded-full center text-white font-bold text-sm">
              DT
            </div>
            <div>
              <h1 className="font-space font-bold text-lg">DrexOTP</h1>
              <p className="text-xs text-muted">Secure Numbers</p>
            </div>
          </div>
          
          {/* Header Actions */}
          <div className="flex items-center gap-3">
            <ModeToggle />
            
            {/* User Profile Dropdown */}
            <div className="relative group">
              <button className="flex items-center gap-2 p-2 rounded-xl hover:bg-secondary transition-colors">
                <div className="size-8 bg-gradient-to-r from-main to-main/70 rounded-full center text-white text-xs font-bold">
                  JD
                </div>
              </button>
              
              {/* Dropdown Menu */}
              <div className="absolute right-0 top-12 w-48 bg-background border border-line rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="p-2">
                  <div className="px-3 py-2 border-b border-line">
                    <p className="font-medium">John Doe</p>
                    <p className="text-xs text-muted">Premium User</p>
                  </div>
                  
                  <button className="flex items-center gap-3 w-full px-3 py-2 rounded-lg text-muted hover:text-main hover:bg-secondary transition-colors">
                    <Settings className="size-4" />
                    <span>Settings</span>
                  </button>
                  
                  <button 
                    onClick={handleLogout}
                    className="flex items-center gap-3 w-full px-3 py-2 rounded-lg text-muted hover:text-red-500 hover:bg-secondary transition-colors"
                  >
                    <LogOut className="size-4" />
                    <span>Logout</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Main Content */}
      <motion.main
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.4 }}
        className="p-4"
      >
        {children}
      </motion.main>

      {/* Bottom Navigation */}
      <motion.nav 
        className="fixed bottom-0 left-0 right-0 border-t border-line bg-background/80 backdrop-blur z-40"
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.3 }}
      >
        <div className="flex justify-around items-center h-16 px-4">
          {navigation.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.href;
            
            return (
              <Link
                key={item.name}
                to={item.href}
                className={`flex flex-col items-center gap-1 p-2 rounded-xl transition-all duration-200 flex-1 max-w-20 ${
                  isActive
                    ? 'text-main'
                    : 'text-muted hover:text-main'
                }`}
              >
                <div className={`p-2 rounded-lg transition-colors ${
                  isActive ? 'bg-main text-white' : 'bg-transparent'
                }`}>
                  <Icon className="size-5" />
                </div>
                <span className="text-xs font-medium">{item.name}</span>
              </Link>
            );
          })}
        </div>
      </motion.nav>
    </div>
  );
}