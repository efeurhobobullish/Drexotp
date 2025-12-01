import { MainLayout } from "@/layouts";
import { MessageCircle, Mail, PhoneCall, Send } from "lucide-react";

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
          <h3 className="text-lg font-space font-bold flex items-center gap-2">
            <MessageCircle size={20} />
            Live Support Chat
          </h3>
          <p className="text-white/80 text-sm">
            Having issues with OTP delivery or number purchase? Talk to our support team.
          </p>
          <button className="btn bg-white text-primary w-full h-11 rounded-lg font-medium hover:bg-white/90">
            Start Chat
          </button>
        </div>
        </div>

        {/* Contact Support */}
        <div className="bg-background dark:bg-secondary border border-line rounded-xl p-5 space-y-3">
          <h3 className="font-space font-semibold">Contact Support</h3>

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