import { motion } from "framer-motion";
import { Home, Phone, Wallet, User } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export default function BottomNav() {
  const location = useLocation();

  const navigation = [
    { name: 'Dashboard', href: '/dashboard', icon: Home },
    { name: 'Numbers', href: '/numbers', icon: Phone },
    { name: 'Wallet', href: '/wallet', icon: Wallet },
    { name: 'Profile', href: '/profile', icon: User },
  ];

  return (
    <motion.nav
      className="fixed bottom-0 left-0 right-0 border-t border-line bg-background/80 backdrop-blur-sm z-40"
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.15, duration: 0.3 }}
    >
      <div className="flex justify-around items-center h-16 px-4">
        {navigation.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.href;

          return (
            <Link
              key={item.name}
              to={item.href}
              className={`flex flex-col items-center gap-1 transition-all duration-200 flex-1 max-w-20 ${
                isActive ? "text-main font-medium" : "text-muted hover:text-main"
              }`}
            >
              <div
                className={`p-2 rounded-xl transition-colors ${
                  isActive
                    ? "bg-primary text-background shadow-sm"
                    : "bg-transparent"
                }`}
              >
                <Icon className="size-5" strokeWidth={1.75} />
              </div>
              <span className="text-[11px] font-medium tracking-wide">
                {item.name}
              </span>
            </Link>
          );
        })}
      </div>
    </motion.nav>
  );
}