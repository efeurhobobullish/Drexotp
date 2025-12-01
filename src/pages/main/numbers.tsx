import { useState } from "react";
import { MainLayout } from "@/layouts";
import { SelectWithoutIcon, ButtonWithLoader } from "@/components/ui";
import NonCloseModal from "@/components/ui/non-close-modal";
import { toast } from "sonner";
import { Phone } from "lucide-react";

export default function Numbers() {
  // Mock data – replace with API results later
  const countries = [
    { label: "Nigeria", value: "NG", flag: "🇳🇬" },
    { label: "Ghana", value: "GH", flag: "🇬🇭" },
    { label: "Kenya", value: "KE", flag: "🇰🇪" },
  ];

  const services = [
    { label: "WhatsApp", value: "whatsapp" },
    { label: "Telegram", value: "telegram" },
    { label: "Facebook", value: "facebook" },
    { label: "Google", value: "google" },
  ];

  const [country, setCountry] = useState("");
  const [service, setService] = useState("");
  const [loading, setLoading] = useState(false);
  const [confirmModal, setConfirmModal] = useState(false);

  const handlePurchase = (e: React.FormEvent) => {
    e.preventDefault();

    if (!country || !service) return toast.error("Select both fields");
    setConfirmModal(true);
  };

  const finalizePurchase = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setConfirmModal(false);
      toast.success("Virtual number purchased successfully!");
      console.log("Purchased:", { country, service });
    }, 1500);
  };

  return (
    <MainLayout>
      <div className="main py-6 space-y-6">
        {/* Page Title */}
        <div>
          <h1 className="text-xl font-space font-bold">Purchase Number</h1>
          <p className="text-sm text-muted">
            Select country and OTP service. Instantly get your virtual number.
          </p>
        </div>

        {/* Purchase Form */}
        <form
          onSubmit={handlePurchase}
          className="space-y-4 bg-background dark:bg-secondary p-5 rounded-xl border border-line"
        >
          <SelectWithoutIcon
            label="Select Country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            options={countries.map((c) => ({
              label: `${c.flag} ${c.label}`,
              value: c.value,
            }))}
            className="bg-foreground"
          />

          <SelectWithoutIcon
            label="Service"
            value={service}
            onChange={(e) => setService(e.target.value)}
            options={services}
            className="bg-foreground"
          />

          <div className="relative">
            {!loading && (
              <Phone className="absolute left-4 top-1/2 -translate-y-1/2" size={18} />
            )}
            <ButtonWithLoader
              loading={loading}
              initialText="Purchase Number"
              loadingText="Processing..."
              className="btn-primary w-full h-11 rounded-md pl-10"
            />
          </div>
        </form>

        {/* Info */}
        <p className="text-xs text-center text-muted">
          You’ll receive the number immediately upon successful purchase.
        </p>

        {/* Confirmation Modal */}
        {confirmModal && (
          <NonCloseModal isOpen={confirmModal} title="Confirm Purchase">
            <p className="text-sm text-muted mb-4">
              Purchase a virtual number for <b>{service}</b> in{" "}
              <b>{countries.find((c) => c.value === country)?.label}</b>?
            </p>

            <div className="flex gap-3">
              <button
                className="btn w-full border border-line rounded-md h-10 text-sm"
                onClick={() => setConfirmModal(false)}
              >
                Cancel
              </button>
              <ButtonWithLoader
                loading={loading}
                initialText="Confirm"
                loadingText="Purchasing..."
                className="btn-primary w-full h-10 rounded-md text-sm"
                onClick={finalizePurchase}
              />
            </div>
          </NonCloseModal>
        )}
      </div>
    </MainLayout>
  );
}