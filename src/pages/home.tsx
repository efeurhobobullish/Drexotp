import ModeToggle from "@/components/ui/mode-toggle";
import { Pattern } from "@/components/ui";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <Pattern>
      <div className="h-[100dvh] relative z-10 center flex-col gap-10 text-center layout">

        {/* System Status */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <div className="center gap-2 drop-shadow-main/10 dark:bg-foreground bg-background rounded-full px-4 py-2 backdrop-blur border border-foreground">
            <span className="relative flex size-3">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75"></span>
              <span className="relative inline-flex size-3 rounded-full bg-green-500"></span>
            </span>
            <p className="text-sm text-muted">System Online 24/7</p>
          </div>
        </motion.div>

        {/* Title and description */}
        <motion.div
          className="space-y-2"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
        >
          <h1 className="text-6xl md:leading-[80px] leading-[60px] font-space font-bold text-transparent bg-clip-text bg-gradient-to-r from-main to-main/70 dark:to-main/50">
            DrexOTP
          </h1>

          <p className="text-muted text-xs">
            Protected using <span className="font-bold text-yellow-500">AES-256</span> encryption.
          </p>

          <p className="text-muted text-sm">
            Instant virtual numbers for OTP verification. Fast, secure and one-time use.
          </p>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          className="flex gap-4 text-sm md:flex-row flex-col"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <Link to="/main">
            <button className="btn-primary min-w-[200px] h-10 rounded-full">
              Get OTP Now
            </button>
          </Link>
        </motion.div>

        {/* Subtle footer (optional) */}
        <motion.p
          className="text-xs text-muted mt-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Trusted by users worldwide.
        </motion.p>

        {/* Mode Toggle */}
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