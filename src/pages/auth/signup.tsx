import { ButtonWithLoader, InputWithIcon } from "@/components/ui";
import { AuthLayout } from "@/layouts";
import { Lock, Mail, Phone, UserRound } from "lucide-react";
import { Link } from "react-router-dom";

export default function Signup() {
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

      <form className="space-y-4 bg-background dark:bg-secondary p-6 border-2 border-line rounded-xl my-10">
        <InputWithIcon
          icon={<UserRound size={20} />}
          label="Username"
          type="text"
          className="bg-foreground"
          placeholder="e.g John Doe or Scorpion"
        />
        <InputWithIcon
          icon={<Mail size={20} />}
          label="Email"
          type="email"
          className="bg-foreground"
          placeholder="e.g johndoe@example.com"
        />
        <InputWithIcon
          icon={<Phone size={20} />}
          label="Phone Number"
          type="tel"
          className="bg-foreground"
          placeholder="11-digit"
        />
        <InputWithIcon
          icon={<Lock size={20} />}
          label="Password"
          type="password"
          className="bg-foreground"
          placeholder="Min 8 characters"
        />

        <ButtonWithLoader
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