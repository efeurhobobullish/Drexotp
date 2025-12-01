import { ButtonWithLoader, InputWithIcon } from "@/components/ui";
import { AuthLayout } from "@/layouts";
import { Lock, Mail } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Login() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulated login
    setTimeout(() => {
      setLoading(false);
      console.log("Login Form Data:", form);
      navigate("/dashboard"); // Redirect to dashboard
    }, 1200);
  };

  return (
    <AuthLayout>
      <div className="text-center space-y-2">
        <h3 className="text-2xl font-bold font-space">Welcome Back</h3>
        <p className="text-sm text-muted">
          Don’t have an account?{" "}
          <Link to="/signup" className="text-blue-500 underline">
            Register
          </Link>
        </p>
      </div>

      {/* Form */}
      <form
        className="space-y-4 bg-background dark:bg-secondary p-6 border-2 border-line rounded-xl my-10"
        onSubmit={handleSubmit}
      >
        <InputWithIcon
          icon={<Mail size={20} />}
          label="Email"
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          required
          className="bg-foreground"
          placeholder="e.g. johndoe@example.com"
        />

        <InputWithIcon
          icon={<Lock size={20} />}
          label="Password"
          type="password"
          name="password"
          value={form.password}
          onChange={handleChange}
          required
          className="bg-foreground"
          placeholder="Min 8 characters"
        />

        <p>
          <Link
            to="/forgot-password"
            className="text-sm font-medium text-primary"
          >
            Forgot Password?
          </Link>
        </p>

        <ButtonWithLoader
          loading={loading}
          initialText="Login"
          loadingText="Logging in..."
          className="btn-primary text-sm font-semibold h-11 rounded-full w-full"
        />

        <p className="text-xs text-center text-muted">
          We do not use cookies, we use fish. 🐟
        </p>
      </form>
    </AuthLayout>
  );
}