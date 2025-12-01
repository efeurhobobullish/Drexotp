import { ButtonWithLoader, InputWithIcon } from "@/components/ui";
import { AuthLayout } from "@/layouts";
import { Lock, Mail } from "lucide-react";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <AuthLayout>
      <div className="text-center space-y-2">
        <h3 className="text-2xl font-bold font-space">Welcome Back</h3>
        <p className="text-sm text-muted">
          Dont have an account?{" "}
          <Link to="/signup" className="text-blue-500 underline">
            Register
          </Link>
        </p>
      </div>

      <form className="space-y-4 bg-background dark:bg-secondary p-6 border-2 border-line rounded-xl my-10">
        <InputWithIcon
          icon={<Mail size={20} />}
          label="Email"
          type="email"
          className="bg-foreground"
          placeholder="e.g johndoe@example.com"
        />
        <InputWithIcon
          icon={<Lock size={20} />}
          label="Password"
          type="password"
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