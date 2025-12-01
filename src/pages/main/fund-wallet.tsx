import { useState } from "react";
import { MainLayout } from "@/layouts";
import { ButtonWithLoader, InputWithoutIcon } from "@/components/ui";
import { toast } from "sonner";
import { usePaystackPayment } from "react-paystack";
import { Wallet2 } from "lucide-react";

export default function FundWallet() {
  const [amount, setAmount] = useState("");
  const [loading, setLoading] = useState(false);

  const config = {
    reference: new Date().getTime().toString(),
    email: "user@drexotp.com", // Replace with the actual user email
    amount: Number(amount) * 100, // Paystack expects amount in kobo
    publicKey: import.meta.env.VITE_PAYSTACK_PUBLIC_KEY || "pk_test_xxxxxxxxxxxxx",
  };

  const initializePayment = usePaystackPayment(config);

  const handlePayment = (e: React.FormEvent) => {
    e.preventDefault();

    if (!amount || Number(amount) < 200) {
      return toast.error("Enter at least ₦200 to fund wallet");
    }

    setLoading(true);

    initializePayment(
      (response) => {
        console.log("Success:", response);
        toast.success(`₦${Number(amount).toLocaleString()} funded successfully`);
        setAmount("");
        setLoading(false);
      },
      () => {
        toast.error("Transaction cancelled");
        setLoading(false);
      }
    );
  };

  return (
    <MainLayout>
      <div className="main pb-6 space-y-6">
        {/* Header */}
        <div className="space-y-1">
          <h1 className="text-xl font-instrument font-bold">Fund Wallet</h1>
          <p className="text-sm text-muted">
            Add money to your Drexotp balance using Paystack.
          </p>
        </div>

        {/* Funding Form */}
        <form
          onSubmit={handlePayment}
          className="bg-background dark:bg-secondary border border-line rounded-xl p-6 space-y-4"
        >
          <InputWithoutIcon
            type="number"
            label="Amount (₦)"
            placeholder="e.g. 2000"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="bg-foreground"
          />

          <ButtonWithLoader
            loading={loading}
            initialText={
              <>
                <Wallet2 size={18} /> Pay with Paystack
              </>
            }
            loadingText="Processing..."
            className="btn-primary text-sm font-semibold h-11 rounded-lg w-full"
          />
        </form>

        {/* Info Text */}
        <p className="text-xs text-center text-muted">
          Minimum funding is <span className="font-semibold">₦200</span>. All payments are securely processed via Paystack.
        </p>
      </div>
    </MainLayout>
  );
}