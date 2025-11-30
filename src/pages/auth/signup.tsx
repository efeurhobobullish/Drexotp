import { motion } from "framer-motion";
import { AuthLayout } from "@/layouts";
import { Pattern, ModeToggle, GobackButton, InputWithIcon, ButtonWithLoader, InputCheck,   } from "@/components/ui";
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
      <AuthLayout>
        <motion.div
          className="relative layout space-y-6 max-w-[400px]"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          {/* Header */}
          <div className="flex justify-between items-center mb-2">
            <button onClick={() => navigate(-1)}>
              <GobackButton />
            </button>
            <ModeToggle />
          </div>

          {/* Title */}
          <div className="text-center space-y-2">
            <h1 className="text-2xl font-space font-bold">Create Account</h1>
            <p className="text-sm text-muted">
              Join DrexOTP — generate instant OTP virtual numbers.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <InputWithIcon
  icon={<Signature size={20} />}
  type="text"
  name="fullName"
  placeholder="Full Name (e.g. Efeurhobo Bullish)"
  value={form.fullName}
  onChange={handleChange}
  required
/>

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

            {/* Terms Checkbox */}
            <div className="flex items-center gap-2 text-xs">
              <InputCheck
                checked={checked}
                onChange={() => setChecked(!checked)}
              />
              <span className="text-muted">
                I agree to the <span className="text-main">Terms & Privacy</span>
              </span>
            </div>

            {/* Submit Button With Loader */}
            <ButtonWithLoader
              loading={loading}
              initialText="Create Account"
              loadingText="Creating Account..."
              className="btn-primary w-full h-10 rounded-md font-semibold"
            />
          </form>

          {/* Link to Login */}
          <p className="text-xs text-muted text-center">
            Already have an account?{" "}
            <Link to="/login" className="text-main hover:underline">
              Log in
            </Link>
          </p>
        </motion.div>
      </AuthLayout>
    </Pattern>
  );
}