import { Pattern, ModeToggle } from "@/components/ui";
import { motion } from "framer-motion";
import { LogOut, Smartphone, Zap } from "lucide-react"; 
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();

  return (
    <Pattern>
      {/* Top Toolbar */}
      <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-50">
        <h1 className="font-space font-bold text-lg">DrexOTP</h1>

        <div className="flex items-center gap-3">
          <ModeToggle />
          {/* Temp user/logout action */}
          <button
            onClick={() => navigate("/login")}
            className="text-muted hover:text-main transition"
          >
            <LogOut size={20} />
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="min-h-[100dvh] center">
        <motion.div
          className="layout max-w-[500px] w-full flex flex-col items-center gap-6"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
        >
          {/* Balance / Status */}
          <div className="w-full bg-secondary border border-line rounded-xl p-4 text-center">
            <p className="text-sm text-muted">Available Balance</p>
            <h2 className="text-2xl font-semibold">₦0.00</h2>
          </div>

          {/* Generate OTP */}
          <button
            className="btn-primary w-full h-12 rounded-xl flex items-center justify-center gap-2 text-sm font-semibold"
          >
            <Zap size={18} /> Generate OTP
          </button>

          {/* Recent Requests (placeholder) */}
          <div className="w-full bg-background rounded-xl p-4 border border-line">
            <div className="flex items-center gap-2">
              <Smartphone size={16} className="text-muted" />
              <p className="text-sm text-muted">No recent OTP activity</p>
            </div>
          </div>
        </motion.div>
      </div>
    </Pattern>
  );
}
