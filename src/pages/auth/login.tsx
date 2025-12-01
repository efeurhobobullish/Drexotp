import {
  Pattern,
  InputWithIcon,
  ButtonWithLoader,
  InputCheck,
} from "@/components/ui";
import { AuthLayout } from "@/layouts";
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
      navigate("/dashboard");
    }, 1500);
  };

  return (
    <Pattern>
      <AuthLayout>
        <div className="min-h-screen flex items-center justify-center p-4">
          <div className="w-full max-w-[400px] space-y-6">
            {/* Header */}
            <header className="text-center space-y-2">
              <h1 className="text-2xl font-instrument font-bold">Welcome Back</h1>
              <p className="text-sm text-muted">
                Continue with DrexOTP — secure virtual numbers.
              </p>
            </header>

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
              <div className="flex items-start gap-3 text-sm">
                <InputCheck
                  checked={rememberMe}
                  onChange={() => setRememberMe(!rememberMe)}
                  className="mt-0.5"
                />
                <span className="text-muted leading-relaxed">Remember me</span>
              </div>

              {/* Submit */}
              <ButtonWithLoader
                loading={loading}
                initialText="Login"
                loadingText="Signing In..."
                className="btn-primary w-full h-11 rounded-md font-semibold"
              />
            </form>

            {/* Switch to Sign Up */}
            <footer className="text-center">
              <p className="text-sm text-muted">
                Don’t have an account?{" "}
                <Link to="/signup" className="text-main hover:underline font-medium">
                  Sign up
                </Link>
              </p>
            </footer>
          </div>
        </div>
      </AuthLayout>
    </Pattern>
  );
}