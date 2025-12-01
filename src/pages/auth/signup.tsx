import { ButtonWithLoader, InputWithIcon } from "@/components/ui";
import { AuthLayout } from "@/layouts";
import { Lock, Mail, UserRound, Signature } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Signup() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
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

    // Simulate API registration
    setTimeout(() => {
      setLoading(false);
      console.log("Signup Form Submitted:", form);
      navigate("/dashboard"); // Redirect user
    }, 1500);
  };

  return (
    <AuthLayout>
      <div className="text-center space-y-2">
        <h3 className="text-2xl font-bold font-space">Create an Account</h3>
        <p className="text-sm text-muted">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-500 underline">
            Login
          </Link>
        </p>
      </div>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="space-y-4 bg-background dark:bg-secondary p-6 border-2 border-line rounded-xl my-10"
      >
        <InputWithIcon
          icon={<Signature size={20} />}
          label="Full Name"
          type="text"
          name="fullName"
          value={form.fullName}
          onChange={handleChange}
          required
          className="bg-foreground"
          placeholder="e.g. Empire Tech"
        />

        <InputWithIcon
          icon={<UserRound size={20} />}
          label="Username"
          type="text"
          name="username"
          value={form.username}
          onChange={handleChange}
          required
          className="bg-foreground"
          placeholder="e.g. empire_dev"
        />

        <InputWithIcon
          icon={<Mail size={20} />}
          label="Email"
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          required
          className="bg-foreground"
          placeholder="e.g. empire@example.com"
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

        <ButtonWithLoader
          loading={loading}
          initialText="Register"
          loadingText="Registering..."
          className="btn-primary text-sm font-semibold h-11 rounded-full w-full"
        />

        <p className="text-xs text-center text-muted">
          By continuing, you agree to our{" "}
          <Link to="/terms" className="text-blue-500 underline">
            Terms of Service
          </Link>{" "}
          and{" "}
          <Link to="/privacy" className="text-blue-500 underline">
            Privacy Policy
          </Link>
        </p>
      </form>
    </AuthLayout>
  );
}