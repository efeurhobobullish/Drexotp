import { MainLayout } from "@/layouts";
import { Mail, PhoneCall, Send } from "lucide-react";

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

        {/* Contact Support */}
        <div className="bg-background dark:bg-secondary border border-line rounded-xl p-5 space-y-3">
          <h3 className="font-space font-semibold">Contact Support</h3>
          <p className="text-sm text-muted">
            Reach out through any of the options below.
          </p>

          <div className="space-y-2">
            <button className="btn w-full h-11 rounded-lg bg-foreground text-main flex items-center justify-center gap-2">
              <Mail size={20} />
              Email Support
            </button>

            <button
              onClick={() => window.open("https://wa.me/23480785827", "_blank")}
              className="btn w-full h-11 rounded-lg bg-foreground text-main flex items-center justify-center gap-2"
            >
              <PhoneCall size={20} />
              WhatsApp Support
            </button>

            <button
              onClick={() => window.open("https://t.me/only_one_empire", "_blank")}
              className="btn w-full h-11 rounded-lg bg-foreground text-main flex items-center justify-center gap-2"
            >
              <Send size={20} />
              Telegram Support
            </button>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}