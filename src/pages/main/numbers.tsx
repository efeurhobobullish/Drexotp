import { useState, useEffect } from "react";
import { MainLayout } from "@/layouts";
import { InputWithoutIcon, ButtonWithLoader, NonCloseModal } from "@/components/ui";
import { toast } from "sonner";
import { Phone, Flag, RefreshCcw } from "lucide-react";

export default function Numbers() {
  const [country, setCountry] = useState("");
  const [service, setService] = useState("");
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showPurchased, setShowPurchased] = useState(false);
  const [otpMessages, setOtpMessages] = useState([
    { id: 1, service: "WhatsApp", code: "—", time: "No message yet" },
    { id: 2, service: "Telegram", code: "—", time: "No message yet" },
  ]);

  // Fake refresh logic (auto refresh every 7s after purchase)
  useEffect(() => {
    if (showPurchased) {
      const interval = setInterval(() => {
        setOtpMessages([
          {
            id: 1,
            service: "WhatsApp",
            code: Math.floor(100000 + Math.random() * 900000).toString(),
            time: "Just now",
          },
          {
            id: 2,
            service: "Telegram",
            code: Math.floor(100000 + Math.random() * 900000).toString(),
            time: "Few seconds ago",
          },
        ]);
      }, 7000);
      return () => clearInterval(interval);
    }
  }, [showPurchased]);

  const handlePurchase = () => {
    if (!country || !service) {
      toast.warning("Select country and service");
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setShowModal(false);
      setShowPurchased(true);
      toast.success("Number purchased successfully!");
    }, 1600);
  };

  return (
    <MainLayout>
      <div className="main pb-10 space-y-6">
        <h1 className="text-xl font-space font-bold">Purchase Virtual Number</h1>
        <p className="text-sm text-muted">Select country and service to continue</p>

        <div className="space-y-4">
          <InputWithoutIcon
            label="Country"
            placeholder="e.g Nigeria"
            className="bg-foreground"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          />

          <InputWithoutIcon
            label="Service"
            placeholder="e.g WhatsApp"
            className="bg-foreground"
            value={service}
            onChange={(e) => setService(e.target.value)}
          />

          <ButtonWithLoader
            loading={loading}
            initialText="Purchase Number"
            loadingText="Processing..."
            className="btn-primary w-full h-11 rounded-lg text-sm font-medium"
            onClick={() => setShowModal(true)}
          />
        </div>

        {/* After Purchase: Show Live Updating Demo */}
        {showPurchased && (
          <div className="bg-secondary dark:bg-foreground rounded-xl border border-line p-4 space-y-3">
            <div className="flex items-center justify-between">
              <p className="font-space font-semibold text-lg">+234 908 123 4567</p>
              <button
                onClick={() => navigator.clipboard.writeText("+2349081234567")}
                className="text-xs font-medium text-primary hover:underline"
              >
                Copy
              </button>
            </div>

            {otpMessages.map((msg) => (
              <div key={msg.id} className="rounded-lg bg-background border border-line p-3">
                <p className="text-sm">
                  <span className="font-semibold">{msg.service} OTP:</span> {msg.code}
                </p>
                <p className="text-xs text-muted">{msg.time}</p>
              </div>
            ))}

            <button
              onClick={() => {
                toast.info("Refreshing messages…");
                setOtpMessages([
                  {
                    id: 1,
                    service: "WhatsApp",
                    code: Math.floor(100000 + Math.random() * 900000).toString(),
                    time: "Just now",
                  },
                  {
                    id: 2,
                    service: "Telegram",
                    code: Math.floor(100000 + Math.random() * 900000).toString(),
                    time: "Just now",
                  },
                ]);
              }}
              className="btn bg-foreground w-full h-11 rounded-lg text-sm flex items-center justify-center gap-2"
            >
              <RefreshCcw size={18} />
              Refresh Messages
            </button>
          </div>
        )}

        {/* Confirm Modal */}
        {showModal && (
          <NonCloseModal isOpen={showModal} title="Confirm Purchase">
            <p className="text-sm text-muted mb-4">
              You're about to purchase a virtual number for{" "}
              <span className="text-main font-medium">{service}</span> ({country}).
            </p>
            <div className="flex items-center gap-2">
              <button
                className="btn w-full h-10 rounded-lg font-medium border border-line"
                onClick={() => setShowModal(false)}
              >
                Cancel
              </button>
              <ButtonWithLoader
                loading={loading}
                initialText="Confirm"
                loadingText="Purchasing..."
                className="btn-primary w-full h-10 rounded-lg"
                onClick={handlePurchase}
              />
            </div>
          </NonCloseModal>
        )}
      </div>
    </MainLayout>
  );
}