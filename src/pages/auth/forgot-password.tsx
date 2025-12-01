import { ButtonWithLoader, InputWithIcon } from "@/components/ui";
import { AuthLayout } from "@/layouts";
import { Mail } from "lucide-react";
import { Link } from "react-router-dom";

export default function ForgotPassword() {
  return (
    <AuthLayout>
      <div className="text-center space-y-2">
        <h3 className="text-2xl font-bold font-space">Forgot Password</h3>
        <p className="text-sm text-muted">
          Remember your password?{" "}
          <Link to="/login" className="text-blue-500 underline">
            Login
          </Link>
        </p>
      </div>

      <form className="space-y-4 bg-background dark:bg-secondary p-6 border-2 border-line rounded-3xl my-10">
        <InputWithIcon
          icon={<Mail size={20} />}
          label="Email"
          type="email"
          className="bg-foreground"
          placeholder="e.g johndoe@example.com"
        />
       
        <ButtonWithLoader
          initialText="Continue"
          loadingText="Sending..."
          className="btn-primary text-sm font-semibold h-11 rounded-full w-full"
        />

        <p className="text-xs text-center text-muted">
         A reset link will be sent to your email.
        </p>
      </form>
    </AuthLayout>
  );
}