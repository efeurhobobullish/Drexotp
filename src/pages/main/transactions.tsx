import { MainLayout } from "@/layouts";
import { ArrowDownCircle, ArrowUpCircle, Loader2 } from "lucide-react";

interface TransactionType {
  id: number;
  type: "credit" | "debit"; // credit = fund wallet, debit = purchase
  amount: number;
  status: "success" | "pending" | "failed";
  date: string;
  description: string;
}

export default function Transactions() {
  // Sample data (replace with API later)
  const transactions: TransactionType[] = [
    {
      id: 1,
      type: "credit",
      amount: 50000,
      status: "success",
      date: "2024-02-01",
      description: "Wallet Funded (Paystack)",
    },
    {
      id: 2,
      type: "debit",
      amount: 19900,
      status: "pending",
      date: "2024-02-02",
      description: "Virtual Number Purchase - WhatsApp",
    },
    {
      id: 3,
      type: "credit",
      amount: 10000,
      status: "failed",
      date: "2024-01-30",
      description: "Wallet Funding Attempt",
    },
  ];

  const getStatusClass = (status: string) => {
    switch (status) {
      case "success":
        return "bg-green-500/10 text-green-500";
      case "pending":
        return "bg-amber-500/10 text-amber-500";
      case "failed":
        return "bg-red-500/10 text-red-500";
      default:
        return "bg-muted/10 text-muted";
    }
  };

  const getIcon = (type: string) =>
    type === "credit" ? <ArrowDownCircle size={20} /> : <ArrowUpCircle size={20} />;

  return (
    <MainLayout>
      <div className="main pb-6 space-y-6">
        {/* Page Header */}
        <div>
          <h1 className="text-xl font-instrument font-bold">Transactions</h1>
          <p className="text-sm text-muted">Monitor your wallet history</p>
        </div>

        {/* Transactions List */}
        <div className="space-y-3">
          {transactions.length === 0 ? (
            <div className="border border-line bg-secondary dark:bg-foreground p-6 rounded-xl text-center">
              <Loader2 className="animate-spin size-5 mx-auto mb-2 text-muted" />
              <p className="text-sm text-muted">Loading transactions...</p>
            </div>
          ) : (
            transactions.map((txn) => (
              <div
                key={txn.id}
                className="flex items-center justify-between border border-line bg-background dark:bg-secondary p-4 rounded-xl hover:bg-foreground/40 transition-colors"
              >
                {/* Left: Icon + Description */}
                <div className="flex items-center gap-3">
                  <div
                    className={`size-10 rounded-lg center ${
                      txn.type === "credit" ? "bg-primary/10 text-primary" : "bg-main/10 text-main"
                    }`}
                  >
                    {getIcon(txn.type)}
                  </div>
                  <div>
                    <p className="text-sm font-medium">{txn.description}</p>
                    <p className="text-xs text-muted">{new Date(txn.date).toLocaleDateString()}</p>
                  </div>
                </div>

                {/* Right: Amount + Status */}
                <div className="text-right">
                  <p
                    className={`text-sm font-space font-bold ${
                      txn.type === "credit" ? "text-primary" : "text-main"
                    }`}
                  >
                    {txn.type === "credit" ? "+" : "-"}₦{txn.amount.toLocaleString()}
                  </p>
                  <span
                    className={`text-xs rounded-full px-2 py-1 font-medium ${getStatusClass(
                      txn.status
                    )}`}
                  >
                    {txn.status}
                  </span>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </MainLayout>
  );
}
