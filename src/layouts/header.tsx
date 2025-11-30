import { motion } from "framer-motion";
import { Settings, LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { ModeToggle } from "@/components/ui";

export default function Header() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Add logout logic here
    navigate("/");
  };

  return (
    <motion.header
      className="sticky top-0 z-50 border-b border-line bg-background/80 backdrop-blur-sm"
      initial={{ y: -10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex justify-between items-center h-16 px-4">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="size-10 rounded-full bg-primary center text-background font-space font-bold text-sm shadow-sm">
            DT
          </div>
          <div>
            <h1 className="font-space font-semibold text-lg">DrexOTP</h1>
            <p className="text-xs text-muted">Secure Numbers</p>
          </div>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-3">
          <ModeToggle />

          {/* User Dropdown */}
          <div className="relative group">
            <button className="flex items-center gap-2 p-1.5 rounded-full hover:bg-secondary transition-colors">
              <div className="size-8 rounded-full bg-primary center text-background text-xs font-semibold">
                JD
              </div>
            </button>

            {/* Dropdown */}
            <div className="absolute right-0 top-12 w-48 bg-background border border-line rounded-xl shadow-sm opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              <div className="p-2">
                {/* User Info */}
                <div className="px-3 py-2 border-b border-line">
                  <p className="text-sm font-medium">John Doe</p>
                  <p className="text-xs text-muted">Premium User</p>
                </div>

                {/* Menu Items */}
                <button
                  className="flex items-center gap-3 w-full px-3 py-2 text-muted hover:text-main hover:bg-secondary rounded-lg transition-colors text-sm"
                >
                  <Settings size={16} />
                  <span>Settings</span>
                </button>

                <button
                  onClick={handleLogout}
                  className="flex items-center gap-3 w-full px-3 py-2 text-muted hover:text-red-500 hover:bg-secondary rounded-lg transition-colors text-sm"
                >
                  <LogOut size={16} />
                  <span>Logout</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.header>
  );
}