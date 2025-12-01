import { useState, useEffect } from "react";
import { MainLayout } from "@/layouts";
import {
  SelectWithoutIcon,
  ButtonWithLoader,
  NonCloseModal,
} from "@/components/ui";
import { toast } from "sonner";
import { RefreshCcw } from "lucide-react";

export default function Numbers() {
  const [country, setCountry] = useState("");
  const [service, setService] = useState("");
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showPurchased, setShowPurchased] = useState(false);
  const [otpMessage, setOtpMessage] = useState({
    service: "",
    code: "—",
    time: "No message yet",
  });

  // Live OTP refresh (every 7s after purchase)
  useEffect(() => {
    if (showPurchased && service) {
      const interval = setInterval(() => {
        setOtpMessage({
          service,
          code: Math.floor(100000 + Math.random() * 900000).toString(),
          time: "Just now",
        });
      }, 7000);

      return () => clearInterval(interval);
    }
  }, [showPurchased, service]);

  const handlePurchase = () => {
    if (!country || !service) {
      return toast.warning("Select country and service first");
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setShowModal(false);
      toast.success(`Number for ${service} purchased successfully!`);
      setShowPurchased(true);

      setOtpMessage({
        service,
        code: "—",
        time: "Waiting for OTP...",
      });
    }, 1600);
  };

  return (
    <MainLayout>
      <div className="main pb-10 space-y-6">
        <h1 className="text-xl font-space font-bold">Purchase Virtual Number</h1>
        <p className="text-sm text-muted">Select country and service to continue</p>

        {/* Dropdown Fields */}
        <div className="space-y-4">
          <SelectWithoutIcon
            label="Country"
            className="bg-foreground"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            options={[
              { label: "🇳🇬 Nigeria", value: "Nigeria" },
              { label: "🇬🇭 Ghana", value: "Ghana" },
              { label: "🇰🇪 Kenya", value: "Kenya" },
              { label: "🇺🇸 USA", value: "USA" },
              { label: "🇬🇧 UK", value: "UK" },
            ]}
          />

          <SelectWithoutIcon
            label="Service"
            className="bg-foreground"
            value={service}
            onChange={(e) => setService(e.target.value)}
            options={[
              { label: "WhatsApp", value: "WhatsApp" },
              { label: "Telegram", value: "Telegram" },
              { label: "Facebook", value: "Facebook" },
              { label: "Google", value: "Google" },
              { label: "Instagram", value: "Instagram" },
            ]}
          />

          <ButtonWithLoader
            loading={loading}
            initialText="Purchase Number"
            loadingText="Processing..."
            className="btn-primary w-full h-11 rounded-lg text-sm font-medium"
            onClick={() => setShowModal(true)}
          />
        </div>

        {/* OTP Section (Only selected service) */}
        {showPurchased && (
          <div className="bg-secondary dark:bg-foreground rounded-xl border border-line p-4 space-y-4">
            <p className="font-space font-semibold text-lg">+234 908 123 4567</p>

            <div className="rounded-lg bg-background border border-line p-3">
              <p className="text-sm">
                <span className="font-semibold">{otpMessage.service} OTP:</span>{" "}
                {otpMessage.code}
              </p>
              <p className="text-xs text-muted">{otpMessage.time}</p>
            </div>

            <button
              onClick={() => {
                toast.info("Refreshing…");
                setOtpMessage({
                  service,
                  code: Math.floor(100000 + Math.random() * 900000).toString(),
                  time: "Just now",
                });
              }}
              className="btn bg-foreground w-full h-11 rounded-lg text-sm flex items-center justify-center gap-2"
            >
              <RefreshCcw size={18} />
              Refresh Message
            </button>
          </div>
        )}

        {/* Confirmation Modal */}
        {showModal && (
          <NonCloseModal isOpen={showModal} title="Confirm Purchase">
            <p className="text-sm text-muted mb-4">
              Purchase a virtual number for{" "}
              <span className="font-medium">{service}</span> ({country})?
            </p>
            <div className="flex gap-2">
              <button
                className="btn w-full h-10 border border-line rounded-lg"
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