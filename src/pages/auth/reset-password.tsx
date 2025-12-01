import { ButtonWithLoader, InputWithIcon } from "@/components/ui";
import { AuthLayout } from "@/layouts";
import { Lock } from "lucide-react";
import { Link } from "react-router-dom";

export default function ResetPassword() {
  return (
    <AuthLayout>
      <div className="text-center space-y-2">
        <h3 className="text-2xl font-bold font-space">Reset Password</h3>
        <p className="text-sm text-muted">
          Remember your password?{" "}
          <Link to="/login" className="text-blue-500 underline">
            Login
          </Link>
        </p>
      </div>

      <form className="space-y-4 bg-background dark:bg-secondary p-6 border-2 border-line rounded-3xl my-10">
       
        <InputWithIcon
          icon={<Lock size={20} />}
          label="New Password"
          type="password"
          className="bg-foreground"
          placeholder="Min 8 characters"
        />
        <InputWithIcon
          icon={<Lock size={20} />}
          label="Confirm Password"
          type="password"
          className="bg-foreground"
          placeholder="Min 8 characters"
        />

        <ButtonWithLoader
          initialText="Reset Password"
          loadingText="Resetting Password..."
          className="btn-primary text-sm font-semibold h-11 rounded-full w-full"
        />

        <p className="text-xs text-center text-muted">
         Make sure you remember your password next time. 🐟
        </p>
      </form>
    </AuthLayout>
  );
}