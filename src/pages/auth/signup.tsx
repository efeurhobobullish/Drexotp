import { motion } from "framer-motion";
import { AuthLayout } from "@/layouts";
import { Link } from "react-router-dom";
import { useState } from "react";
import { User, Mail, Lock } from "lucide-react";

export default function Signup() {
  const [form, setForm] = useState({ username: "", email: "", password: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // API handling will be added later
    console.log("Signup data:", form);
  };

  return (
    <AuthLayout>
      <motion.div
        className="layout space-y-6 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <h1 className="text-3xl font-space font-bold">Create Account</h1>
        <p className="text-sm text-muted">
          Join DrexOTP to generate instant OTP virtual numbers.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4 text-left">
          <div className="flex items-center gap-2 border border-line bg-secondary rounded-md px-3 py-2">
            <User className="size-4 text-muted" />
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={form.username}
              onChange={handleChange}
              required
              className="w-full bg-transparent text-main"
            />
          </div>

          <div className="flex items-center gap-2 border border-line bg-secondary rounded-md px-3 py-2">
            <Mail className="size-4 text-muted" />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full bg-transparent text-main"
            />
          </div>

          <div className="flex items-center gap-2 border border-line bg-secondary rounded-md px-3 py-2">
            <Lock className="size-4 text-muted" />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
              required
              className="w-full bg-transparent text-main"
            />
          </div>

          <button
            type="submit"
            className="btn-primary w-full h-10 rounded-md font-semibold"
          >
            Sign Up
          </button>

          <p className="text-xs text-muted text-center">
            Already have an account?{" "}
            <Link to="/login" className="text-main hover:underline">
              Log in
            </Link>
          </p>
        </form>
      </motion.div>
    </AuthLayout>
  );
}