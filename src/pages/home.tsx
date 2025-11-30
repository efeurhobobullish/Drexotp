import { motion } from "framer-motion";
import { ShieldCheck, Zap, Smartphone, ArrowRight, User, LogIn } from "lucide-react";
import { Link } from "react-router-dom";
import ModeToggle from "@/components/ui/mode-toggle";
import { Pattern } from "@/components/ui";

export default function Home() {
  return (
    <Pattern>
      <div className="min-h-[100dvh] relative z-10 flex flex-col items-center justify-center gap-8 text-center px-4 layout">
        
        {/* Header with Theme Toggle */}
        <motion.header
          className="absolute top-6 right-6"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          <ModeToggle />
        </motion.header>

        {/* Status Badge */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur border border-line bg-background dark:bg-foreground shadow-sm">
            <div className="relative flex size-2">
              <span className="absolute h-full w-full animate-ping rounded-full bg-green-500 opacity-75"></span>
              <span className="relative size-2 rounded-full bg-green-500"></span>
            </div>
            <p className="text-xs font-medium">Running Securely</p>
          </div>
        </motion.div>

        {/* Hero Section */}
        <motion.section
          className="space-y-6 max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
        >
          {/* Logo & Title */}
          <div className="space-y-4">
            <motion.h1
              className="text-5xl md:text-6xl font-bold font-space"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <span className="bg-gradient-to-r from-main to-main/70 dark:to-main/40 text-transparent bg-clip-text">
                DrexOTP
              </span>
            </motion.h1>
            
            <motion.p
              className="text-lg text-muted font-light max-w-lg mx-auto leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              Secure OTP generation for modern applications
            </motion.p>
          </div>

          {/* Features */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-muted"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <div className="flex items-center gap-2 bg-secondary dark:bg-foreground px-3 py-2 rounded-lg">
              <ShieldCheck className="size-4 text-green-500" />
              <span>AES-256 Encrypted</span>
            </div>
            <div className="flex items-center gap-2 bg-secondary dark:bg-foreground px-3 py-2 rounded-lg">
              <Smartphone className="size-4 text-blue-500" />
              <span>Instant Generation</span>
            </div>
            <div className="flex items-center gap-2 bg-secondary dark:bg-foreground px-3 py-2 rounded-lg">
              <Zap className="size-4 text-amber-500" />
              <span>Zero Reuse</span>
            </div>
          </motion.div>
        </motion.section>

        {/* Auth CTA Section */}
        <motion.section
          className="space-y-6 w-full max-w-sm"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          {/* Primary Sign Up Button */}
          <Link to="/signup" className="group block">
            <button className="btn btn-primary w-full h-12 rounded-full font-semibold transition-all duration-300 group-hover:scale-105 flex items-center justify-center gap-3">
              <User className="size-5" />
              Create Free Account
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </button>
          </Link>

          {/* Divider */}
          <div className="flex items-center gap-4">
            <div className="h-px flex-1 bg-line"></div>
            <span className="text-xs text-muted">or</span>
            <div className="h-px flex-1 bg-line"></div>
          </div>

          {/* Sign In Button */}
          <Link to="/login" className="group block">
            <button className="btn w-full border border-line hover:border-main text-muted hover:text-main h-12 rounded-full font-medium transition-all duration-300 group-hover:scale-105 flex items-center justify-center gap-2">
              <LogIn className="size-4" />
              Sign In to Account
            </button>
          </Link>
        </motion.section>

        {/* Footer */}
        <motion.footer
          className="absolute bottom-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.4 }}
        >
          <p className="text-xs text-muted flex items-center gap-1">
            Powered by <span className="font-semibold">Drex Technologies</span>
          </p>
        </motion.footer>
      </div>
    </Pattern>
  );
}