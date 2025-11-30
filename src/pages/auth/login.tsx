import { motion } from "framer-motion";
import {
  Pattern,
  ModeToggle,
  GobackButton,
  InputWithIcon,
  ButtonWithLoader,
  InputCheck,
} from "@/components/ui";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Mail, Lock } from "lucide-react";

export default function Login() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      console.log("Login Form:", form);
      navigate("/dashboard"); // Go to dashboard after login
    }, 1500);
  };

  return (
    <Pattern>
      {/* Top UI buttons */}
      <div className="absolute top-4 left-4 z-50">
        <button onClick={() => navigate(-1)}>
          <GobackButton />
        </button>
      </div>

      <div className="absolute top-4 right-4 z-50">
        <ModeToggle />
      </div>

      {/* Main content */}
      <div className="min-h-[100dvh] center">
        <motion.div
          className="layout max-w-[400px] w-full space-y-6"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
        >
          {/* Title */}
          <div className="text-center space-y-2">
            <h1 className="text-2xl font-space font-bold">Welcome Back</h1>
            <p className="text-sm text-muted">
              Continue with DrexOTP — secure virtual numbers.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <InputWithIcon
              icon={<Mail size={20} />}
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              required
            />

            <InputWithIcon
              icon={<Lock size={20} />}
              type="password"
              name="password"
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
              required
            />

            {/* Remember Me */}
            <div className="flex items-center gap-2 text-xs">
              <InputCheck
                checked={rememberMe}
                onChange={() => setRememberMe(!rememberMe)}
              />
              <span className="text-muted">Remember me</span>
            </div>

            <ButtonWithLoader
              loading={loading}
              initialText="Login"
              loadingText="Signing In..."
              className="btn-primary w-full h-10 rounded-md font-semibold"
            />
          </form>

          {/* Link */}
          <p className="text-xs text-muted text-center">
            Don’t have an account?{" "}
            <Link to="/signup" className="text-main hover:underline">
              Sign up
            </Link>
          </p>
        </motion.div>
      </div>
    </Pattern>
  );
}