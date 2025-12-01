import { useState } from "react";
import { MainLayout } from "@/layouts";
import { ButtonWithLoader, InputWithoutIcon } from "@/components/ui";
import { toast } from "sonner";
import PaystackPop from "@paystack/inline-js";
import { Wallet2 } from "lucide-react";

export default function FundWallet() {
  const [amount, setAmount] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const handleFundWallet = (e: React.FormEvent) => {
    e.preventDefault();

    if (!amount || Number(amount) < 200) {
      return toast.error("Enter at least ₦200 to fund wallet");
    }

    setLoading(true);

    // @ts-ignore: Constructor typing limitation
    const paystack = new PaystackPop();

    paystack.newTransaction({
      key: import.meta.env.VITE_PAYSTACK_PUBLIC_KEY || "pk_test_xxxxxx",
      email: "user@drexotp.com", // 👈 Ideally get from auth context
      amount: Number(amount) * 100, // Paystack expects kobo
      onSuccess: (transaction: { reference: string }) => {
        toast.success(`₦${Number(amount).toLocaleString()} successfully funded`);
        console.log("Transaction Successful:", transaction.reference);
        setAmount("");
        setLoading(false);
      },
      onCancel: () => {
        toast.warning("Transaction cancelled");
        setLoading(false);
      },
    });
  };

  return (
    <MainLayout>
      <div className="main pb-6 space-y-6">
        {/* Header */}
        <div className="space-y-1">
          <h1 className="text-xl font-instrument font-bold">Fund Wallet</h1>
          <p className="text-sm text-muted">
            Top up your Drexotp balance securely using Paystack.
          </p>
        </div>

        {/* Form Section */}
        <form
          onSubmit={handleFundWallet}
          className="bg-background dark:bg-secondary border border-line rounded-xl p-6 space-y-4"
        >
          <InputWithoutIcon
            type="number"
            label="Enter Amount (₦)"
            placeholder="e.g 2000"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="bg-foreground"
          />

          {/* Button with external icon (since ButtonWithLoader only accepts string) */}
          <div className="relative">
            {!loading && (
              <Wallet2
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white"
              />
            )}
            <ButtonWithLoader
              loading={loading}
              initialText="Fund Wallet"
              loadingText="Processing..."
              className="btn-primary w-full h-11 rounded-lg text-sm font-semibold pl-10"
            />
          </div>
        </form>

        {/* Info Section */}
        <p className="text-xs text-center text-muted">
          💡 Minimum funding is <span className="font-semibold">₦200</span>.
          Payments are securely handled via Paystack.
        </p>
      </div>
    </MainLayout>
  );
}