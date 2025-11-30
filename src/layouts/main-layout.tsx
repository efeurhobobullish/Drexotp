import { motion } from "framer-motion";
import Header from "./header";
import BottomNav from "./bottomnav";

interface MainLayoutProps {
  children: React.ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="min-h-[100dvh] bg-background pb-20"> {/* Padding for bottom nav */}
      {/* Header */}
      <Header />
      
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
      <BottomNav />
    </div>
  );
}