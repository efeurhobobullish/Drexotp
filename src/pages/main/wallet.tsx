import { motion } from "framer-motion";
import { ArrowUpRight, ArrowDownRight, Wallet } from "lucide-react";
import { MainLayout } from "@/layouts/main-layout";
import { Link } from "react-router-dom";

export default function WalletPage() {
  // Example data (replace when API ready)
  const wallet = {
    balance: 125500, // ₦125,500
    transactions: [
      {
        id: 1,
        amount: 50000,
        type: "credit",
        date: "2024-01-24",
        description: "Wallet Top-Up",
      },
      {
        id: 2,
        amount: 19900,
        type: "debit",
        date: "2024-01-20",
        description: "Purchased Number",
      },
    ],
  };

  return (
    <MainLayout>
      <div className="main space-y-8 pb-6">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="space-y-1"
        >
          <h1 className="text-2xl font-space font-bold">Wallet</h1>
          <p className="text-muted text-sm">Manage funds for virtual number purchases</p>
        </motion.div>

        {/* Balance Card */}
        <motion.div
          className="bg-primary text-background rounded-xl p-5"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.3 }}
        >
          <div className="flex justify-between items-center">
            <div>
              <p className="text-sm opacity-80">Available Balance</p>
              <h2 className="text-2xl font-space font-bold">
                ₦{wallet.balance.toLocaleString()}
              </h2>
            </div>
            <Wallet size={26} className="opacity-70" />
          </div>

          {/* Add Funds Button */}
          <Link to="/wallet/add">
            <button className="btn bg-background text-main w-full mt-4 py-3 rounded-xl hover:bg-background/90 transition font-semibold">
              Add Funds
            </button>
          </Link>
        </motion.div>

        {/* Recent Transactions */}
        <motion.div
          className="bg-secondary dark:bg-foreground border border-line rounded-xl p-5 space-y-3"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.3 }}
        >
          <div className="flex justify-between items-center">
            <h3 className="font-space font-semibold">Recent Transactions</h3>
            <Link to="/wallet/history" className="text-main text-xs hover:underline">
              View All
            </Link>
          </div>

          {wallet.transactions.length > 0 ? (
            <div className="space-y-2">
              {wallet.transactions.map((tx, index) => (
                <motion.div
                  key={tx.id}
                  className="flex items-center justify-between p-3 rounded-lg border border-line/50 hover:border-line bg-background/50 transition-colors"
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.18 + index * 0.05 }}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`size-8 rounded-lg center ${
                        tx.type === "credit"
                          ? "bg-green-500/20 text-green-500"
                          : "bg-red-500/20 text-red-500"
                      }`}
                    >
                      {tx.type === "credit" ? (
                        <ArrowUpRight size={16} />
                      ) : (
                        <ArrowDownRight size={16} />
                      )}
                    </div>
                    <div>
                      <p className="text-sm font-medium">{tx.description}</p>
                      <p className="text-xs text-muted">{tx.date}</p>
                    </div>
                  </div>

                  <p
                    className={`text-sm font-space font-semibold ${
                      tx.type === "credit" ? "text-green-500" : "text-red-500"
                    }`}
                  >
                    {tx.type === "credit" ? "+" : "-"} ₦
                    {tx.amount.toLocaleString()}
                  </p>
                </motion.div>
              ))}
            </div>
          ) : (
            <p className="text-sm text-muted">No transactions yet</p>
          )}
        </motion.div>
      </div>
    </MainLayout>
  );
}