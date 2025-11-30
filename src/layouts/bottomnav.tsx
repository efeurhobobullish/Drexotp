import { motion } from "framer-motion";
import { Home, Phone, User } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export default function BottomNav() {
  const location = useLocation();

  const navigation = [
    { name: 'Dashboard', href: '/dashboard', icon: Home },
    { name: 'Numbers', href: '/numbers', icon: Phone },
    { name: 'Profile', href: '/profile', icon: User },
  ];

  return (
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
  );
}