import { Wallet, Plus, PhoneCall } from "lucide-react";
import CountUp from "react-countup";
import { Link } from "react-router-dom";

export default function FirstBox() {
  return (
    <div className="grid md:grid-cols-2 grid-cols-1 lg:grid-cols-1 gap-4 h-fit">
      {/* Balance Box */}
      <div className="rounded-2xl overflow-hidden border border-line bg-secondary dark:bg-foreground/50">
        <div className="flex justify-between items-center p-4 bg-gradient-to-r from-primary/20 via-primary/10 to-primary/30 dark:via-primary/15 dark:to-primary/25 rounded-lg">
          <div className="space-y-2">
            <p className="text-sm md:text-xs text-muted">Available Balance</p>
            <p className="text-3xl md:text-2xl font-space text-main">
              <CountUp
                end={2300}
                separator=","
                prefix="₦"
                decimals={2}
                duration={0.7}
              />
            </p>
          </div>
          <Wallet size={24} className="text-primary" />
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-background dark:bg-secondary border border-line rounded-xl p-4 h-full flex flex-col space-y-4">
        <p className="text-sm text-muted">Quick Actions</p>

        <div className="grid grid-cols-2 lg:grid-cols-1 gap-4 mt-auto">
          <Link
            to="/fund-wallet"
            className="btn bg-foreground dark:bg-foreground h-12 px-4 rounded-lg text-sm font-medium"
          >
            <Plus size={20} />
            Fund <span className="hidden md:block">Wallet</span>
          </Link>

          <Link
            to="/numbers"
            className="btn bg-foreground dark:bg-foreground h-12 px-4 rounded-lg text-sm font-medium"
          >
            <PhoneCall size={20} />
            Purchase <span className="hidden md:block">Number</span>
          </Link>
        </div>
      </div>
    </div>
  );
}