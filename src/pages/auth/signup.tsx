import { motion } from "framer-motion";
import { AuthLayout } from "@/layouts";
import { Pattern, ModeToggle, GobackButton, InputWithIcon, ButtonWithLoader, InputCheck } from "@/components/ui";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { User, Mail, Lock, Signature } from "lucide-react";

export default function Signup() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [checked, setChecked] = useState(false);
  const [form, setForm] = useState({
    fullName: "",
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    setTimeout(() => {
      setLoading(false);
      console.log("Signup Form:", form);
      navigate("/login");
    }, 1500);
  };

  return (
    <Pattern>
      {/* Header Controls */}
      <div className="absolute top-4 left-4 z-50">
        <button onClick={() => navigate(-1)} aria-label="Go back">
          <GobackButton />
        </button>
      </div>

      <div className="absolute top-4 right-4 z-50">
        <ModeToggle />
      </div>

      <AuthLayout>
        <motion.div
          className="layout space-y-6 max-w-[400px] w-full"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          {/* Header Section */}
          <header className="text-center space-y-2">
            <h1 className="text-2xl font-space font-bold">Create Account</h1>
            <p className="text-sm text-muted">
              Join DrexOTP — generate instant OTP virtual numbers.
            </p>
          </header>

          {/* Form Section */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Personal Information */}
            <InputWithIcon
              icon={<Signature size={20} />}
              type="text"
              name="fullName"
              placeholder="Full Name (e.g. Efeurhobo Bullish)"
              value={form.fullName}
              onChange={handleChange}
              required
            />

            {/* Account Information */}
            <InputWithIcon
              icon={<User size={20} />}
              type="text"
              name="username"
              placeholder="Username"
              value={form.username}
              onChange={handleChange}
              required
            />

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

            {/* Terms Agreement */}
            <div className="flex items-start gap-3 text-sm">
              <InputCheck
                checked={checked}
                onChange={() => setChecked(!checked)}
                className="mt-0.5"
              />
              <span className="text-muted leading-relaxed">
                I agree to the{" "}
                <span className="text-main hover:underline cursor-pointer">
                  Terms & Privacy
                </span>
              </span>
            </div>

            {/* Submit Button */}
            <ButtonWithLoader
              loading={loading}
              initialText="Create Account"
              loadingText="Creating Account..."
              className="btn-primary w-full h-10 rounded-md font-semibold"
              disabled={!checked}
            />
          </form>

          {/* Footer Link */}
          <footer className="text-center">
            <p className="text-sm text-muted">
              Already have an account?{" "}
              <Link 
                to="/login" 
                className="text-main hover:underline font-medium"
              >
                Log in
              </Link>
            </p>
          </footer>
        </motion.div>
      </AuthLayout>
    </Pattern>
  );
}