import ModeToggle from "@/components/ui/mode-toggle";
import { Pattern } from "@/components/ui";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ShieldCheck, Zap, Smartphone } from "lucide-react";

export default function Home() {
  return (
    <Pattern>
      <div className="h-[100dvh] relative z-10 center flex-col gap-8 text-center layout">

        {/* Status Section */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <div className="flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur border border-line dark:bg-foreground bg-background shadow-sm">
            <span className="relative flex size-2">
              <span className="absolute h-full w-full animate-ping rounded-full bg-green-500 opacity-75"></span>
              <span className="relative size-2 rounded-full bg-green-500"></span>
            </span>
            <p className="text-xs">Running Securely</p>
          </div>
        </motion.div>

        {/* Title */}
        <motion.div
          className="space-y-3"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
        >
          <h1 className="text-5xl md:text-6xl font-space font-bold bg-gradient-to-r from-main to-main/70 dark:to-main/40 text-transparent bg-clip-text">
            DrexOTP
          </h1>
          <p className="text-muted flex items-center justify-center gap-1 text-sm">
            <ShieldCheck className="size-4 text-yellow-500" /> AES-256 protected system
          </p>
          <p className="text-muted flex items-center justify-center gap-1 text-sm">
            <Smartphone className="size-4" /> Generate instant OTP numbers with no reuse
          </p>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="flex flex-col md:flex-row gap-4 text-sm"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <Link to="/main">
            <button className="btn-primary min-w-[200px] h-10 rounded-full flex items-center justify-center gap-2">
              <Zap className="size-4" /> Get OTP Now
            </button>
          </Link>
          <Link to="/docs">
            <button className="text-muted hover:text-main transition">
              Learn More
            </button>
          </Link>
        </motion.div>

        {/* Subtle brand Id */}
        <motion.p
          className="text-xs text-muted mt-2 flex items-center gap-1 justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Powered by <span className="font-semibold">Drex Technologies</span>
        </motion.p>

        <motion.div
          className="absolute top-4 right-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <ModeToggle />
        </motion.div>
      </div>
    </Pattern>
  );
}