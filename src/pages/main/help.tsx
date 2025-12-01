import { MainLayout } from "@/layouts";
import { MessageCircle, Mail, PhoneCall } from "lucide-react";
import { Link } from "react-router-dom";

export default function Help() {
  return (
    <MainLayout>
      <div className="main pb-6 space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-xl font-instrument font-bold">Help & Support</h1>
          <p className="text-sm text-muted">
            We're here to assist you with any issue related to Drexotp.
          </p>
        </div>

        {/* Chat Support */}
        <div className="rounded-xl bg-primary text-white p-5 space-y-3">
          <h3 className="font-space font-bold text-lg flex items-center gap-2">
            <MessageCircle size={20} />
            Live Support Chat
          </h3>
          <p className="text-white/80 text-sm">
            Need help with virtual number purchase or alerts? Chat with our
            support team.
          </p>

          <button className="btn bg-white text-primary w-full h-11 rounded-lg font-medium hover:bg-white/90">
            Start Chat
          </button>
        </div>

        {/* FAQ Section */}
        <div className="bg-background dark:bg-secondary border border-line rounded-xl p-5 space-y-4">
          <h3 className="font-space font-semibold">Quick Help</h3>

          <div className="space-y-3">
            <div className="p-3 rounded-lg bg-secondary/50 dark:bg-foreground/40">
              <p className="text-sm font-medium">How do I purchase a virtual number?</p>
              <p className="text-xs text-muted">
                Go to Numbers &gt; Select Country or Service &gt; Click on Purchase.
              </p>
            </div>

            <div className="p-3 rounded-lg bg-secondary/50 dark:bg-foreground/40">
              <p className="text-sm font-medium">Is the number permanent?</p>
              <p className="text-xs text-muted">
                Most numbers are session-based. Permanent numbers can be requested manually.
              </p>
            </div>

            <div className="p-3 rounded-lg bg-secondary/50 dark:bg-foreground/40">
              <p className="text-sm font-medium">What if I don’t receive OTP?</p>
              <p className="text-xs text-muted">
                Make sure the OTP was sent correctly. Contact support if delay exceeds 2 minutes.
              </p>
            </div>
          </div>
        </div>

        {/* Alternative Support */}
        <div className="bg-background dark:bg-secondary border border-line rounded-xl p-5 space-y-3">
          <h3 className="font-space font-semibold">Other Contact Options</h3>

          <div className="space-y-2">
            <button className="btn w-full h-11 rounded-lg bg-foreground text-main flex items-center justify-center gap-2">
              <Mail size={20} />
              Email Support
            </button>

            <button className="btn w-full h-11 rounded-lg bg-foreground text-main flex items-center justify-center gap-2">
              <PhoneCall size={20} />
              WhatsApp Support
            </button>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}